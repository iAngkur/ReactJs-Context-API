import React from 'react';
// import Context from './userContext';

import {UserConsumer} from './userContext';

const LoggedInNav = () => {
    return (
        <UserConsumer>
            {({ user, logout }) => (
                <div>
                    <p>Hello {user.name}, You LoggedIn with {user.email} {' '}</p>
                    <ul>
                        <li>Dashboard</li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                </div>
            )}
        </UserConsumer>
    );
};
const LoggedOutNav = () => {
    return (
        <UserConsumer>
            {({login}) => (
                <div>
                    <p>Please Click The Login Button Below</p>
                    <ul>
                        <li onClick={login}>Login</li>
                        <li>Register</li>
                    </ul>
                </div>
            )}
        </UserConsumer>
    );
};

// Main Component
const BasicNav = () => {
    return(
      <UserConsumer>
        {({isAuthenticated}) =>
            isAuthenticated ? <LoggedInNav/> : <LoggedOutNav/>
        }
      </UserConsumer>  
    );
};

export default BasicNav;