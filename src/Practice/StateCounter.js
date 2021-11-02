import React, { Component } from 'react'

class New extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        this.setState({
            count : this.state.count +1
        })
    }

    render() {
        return (
            <div>
               <h1>Count - {this.state.count}</h1>
               <button onClick={()=> this.increment()}>Click to Increment</button>
            </div>
        )
    }
}

export default New