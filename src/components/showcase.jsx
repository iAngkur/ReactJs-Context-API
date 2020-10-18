import React from 'react';
import {UserConsumer, UserContext} from './userContext';

class AddItem extends React.Component {
    state = {
        value: ''
    };

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    addItem = () => {
        if (this.state.value) {
            this.context.addToShowcase(this.state.value);
            this.setState({value: ''});
        }
    };

    render() {
        return (
            <div className="d-flex my-3">
                <input
                    type='text'
                    className='form-control mr-2'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    className="btn btn-sm btn-primary btn-block"
                    onClick={this.addItem}
                >
                    Add Item
                </button>
            </div>
        )
    }
};

AddItem.contextType = UserContext; // er fole uporer class e context ta use korte parbo

const ItemList = () => {
    return (
        <UserConsumer>
            {({ user }) => (
                <ul className="list-group">
                    {user.languages.map(lang => (
                        <li className="list-group-item">
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </UserConsumer>
    );
};

// Main Component
const Showcase = () => {
    return (
        <UserConsumer>
            {({user}) => (
                <div>
                    <h3>{user.name} Showcase</h3>
                    <AddItem />
                    <ItemList />
                </div>
            )}
        </UserConsumer>
    );
};

export default Showcase;