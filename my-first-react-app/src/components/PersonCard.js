import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    addOneToAge = () => {
        this.setState({age: this.state.age += 1})
        alert(`Happy Birthday ${this.props.firstName}`);
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        const {age} = this.state;

        return (
            <div>
                <div>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={this.addOneToAge}>It's Your B-Day??? Click Me!!!</button>
                </div>
            </div>
        )
    }
}

export default PersonCard;