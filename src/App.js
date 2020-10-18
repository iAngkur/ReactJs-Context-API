import React, {Component} from 'react';

import BasicNav from './components/basic_nav';
import ShowCase from './components/showcase';

// import Context from './components/userContext';
import {UserConsumer, UserProvider} from './components/userContext';

class App extends Component{  
  render() {
    return (
      <UserProvider>
            {({isAuthenticated}) => (
              <div className="container">
                <div className="row">
                  <UserConsumer>
                    {({isAuthenticated}) => (
                      <div className="col-sm-6 offset-sm-3">
                        <h1 className="my-2">
                          Context API Demo
                        </h1>
                        <hr />
                        <BasicNav />
                        <hr/>
                        {isAuthenticated && <ShowCase />}
                      </div>
                    )}
                  </UserConsumer>
                </div>
              </div>
            )}
      </UserProvider>
    );
  }
}

export default App;
