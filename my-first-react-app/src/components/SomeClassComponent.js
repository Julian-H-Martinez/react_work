import React, {Component} from 'react';

class SomeClassComponent extends Component{
    render(){
        const {firstName, lastName} = this.props;
        return (
            <div>
                <h1>This is our first class component!</h1>
                <h3>Welcome, {firstName} {lastName}</h3>
            </div>)
    }
}

export default SomeClassComponent;