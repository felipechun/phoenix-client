import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const ProtectedRoute  = ({component: Component, user, remove, shoppingCart, total, path, ...rest}) => {
    console.log({component: Component, user, remove, shoppingCart, total, path, ...rest})
    console.log(path)
    return (
      <Route
        {...rest}
        render={ props  => {
          if(path === '/cart'){
              if(user){
                return <Component {...props} remove={remove} shoppingCart={shoppingCart} total={total} userObj={user}/>
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