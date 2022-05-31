import React, {Component} from 'react';

class SomeClassComponent extends Component{
    render(){
        //  this refers to SomeClassComponent
        //  props refers to properties that can be passed
        // const {firstName, lastName} = this.props;
        const {header, children} = this.props;
        return (
            // <div>
            //     <h1>This is our first class component!</h1>
            //     <h3>Welcome, {firstName} {lastName}</h3>
            // </div>
            <div>
                <h1>
                    {header}
                </h1>
                {children}
            </div>
        )
    }
}

export default SomeClassComponent;