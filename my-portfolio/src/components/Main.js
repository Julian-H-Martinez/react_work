import './Main.css';
import React, {Component} from "react";

class Main extends Component{
    render(){
        return (
            <main className={'mainPanel'}>
                <h1>
                    Main Panel
                </h1>
                {this.props.children}
            </main>
        )
    }
}

export default Main;