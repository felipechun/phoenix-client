import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute  = ({component: Component, user, checkout, remove, shoppingCart, total, path, ...rest}) => {
  console.log('REST', {...rest})
  return (
    <Route
      {...rest}
      render={ props  => {
        if(path === '/cart'){
            if(user){
              return <Component {...props} checkout={checkout} remove={remove} shoppingCart={shoppingCart} total={total} userObj={user}/>
            } else {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}} />
            }
          } else {
            if(user){
              return <Component {...props} userObj={user}/>
            } else {
              return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
          }
        }
      }
    />
  )
}
export default ProtectedRoute;