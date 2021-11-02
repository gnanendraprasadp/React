import React, { Component } from 'react'

class EventHandling extends Component {

    constructor() {
        super()

        this.state = {
            message: 'Click on me'
        }
        //this.clicked = this.clicked.bind(this);
    }

    // clicked = () =>{
    //     this.setState({
    //         message: 'You Clicked Button'
    //     })
    // }

    clicked() {
        this.setState({
            message: 'You Clicked Button'
        })
    }
    render() {
        return (
            <div>
                <p>6. Event Handling</p>
                {/* <button onClick={this.clicked}>{this.state.message}</button> */}
                <button onClick={() => this.clicked()}>{this.state.message}</button>
                {/* <button onClick={()=>this.clicked.bind(this)}>{this.state.message}</button> */}

            </div>
        )
    }
}

export default EventHandling
