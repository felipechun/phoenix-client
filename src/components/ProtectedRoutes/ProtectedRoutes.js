import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute  = ({component: Component, user, role, ...rest}) => {
  console.log({component: Component, user, role, ...rest})
    return (
      <Route
        {...rest}
        render={ props  => {
            if(user && user.role == role){
              return <Component {...props} userObj={user}/>
            } else {
              return <Redirect to={{pathname: '/', state: {from: props.location}}} />
            }
          }
        }
      />
    )
}
export default ProtectedRoute;