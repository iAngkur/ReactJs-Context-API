import React, {Component, createContext} from 'react'

// const Context = createContext();

let Context = null;
const {Provider, Consumer} = Context = createContext();

class UserProvider extends Component {
    state = {
        user: {
          name: 'Angkur Mondal',
          email: 'angkur@mondal.com',
          languages: [
            'C Programming',
            'Java',
            'Kotlin',
            'Python',
            'Javascript'
          ]
        }, 
        isAuthenticated: true
      };
      
      login = () => {
        this.setState({isAuthenticated: true});
      };
      
      logout = () => {
        this.setState({isAuthenticated: false});
    
      };
    
      addToShowcase = item => {
        const user = {...this.state.user};
        user.languages.push(item);
        this.setState({ user });
      };

      render() {
          return (
              <Provider
                  value={{
                    ...this.state, 
                    login: this.login, 
                    logout: this.logout,
                    addToShowcase: this.addToShowcase 
                }}
              >
                {this.props.children}
              </Provider>
          );
      }
}

export {UserProvider, Consumer as UserConsumer, Context as UserContext};