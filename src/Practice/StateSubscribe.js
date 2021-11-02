import React, { Component } from "react";

class StateSubscribe extends Component {

    constructor(){
        super()
        this.state={
            message:'Click Subscribe Button',
            action:'Subscribe'
        }
    }

    changemessage(){
        this.setState({
            message:'Thank you for subscribing',
            action:'Subscribed'
        })
    }

    render() {
        return (
            <div>
                <p>5. State Example</p>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changemessage()}>{this.state.action}</button>
            </div>
        )
    }
}
export default StateSubscribe;