import React, {Component} from "react";

class LightSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
            position: "On",
            color: "white"
        };
    }

    flipSwitch = () => {
        if(this.state.position === "On"){
            this.setState({position: "Off"});
        }else{
            this.setState({position: "On"});
        }
    }

    changeToForrestGreen = () => {
        if(this.state.color === "white"){
            this.setState({color: "Forest Green"});
        }else{
            this.setState({color: "white"});
        }
    }

    render(){
        return(
            <fieldset>
                <p>The light is currently { this.state.position }</p>
                {/*<button onClick={() => {this.setState({position: "Off"})}}>Flip Switch</button>*/}
                <button onClick={this.flipSwitch}>Flip Switch</button>
                <p>The color is currently { this.state.color}</p>
                <button onClick={this.changeToForrestGreen}>Change Color</button>
            </fieldset>
        );
    }
}

export default LightSwitch;

/**
state - ability to store own info of a component
 setState() - method to set info of a component since they are immutable
 notice constructor is needed to create an attribute (this.state.position) in this case light switch position
 */