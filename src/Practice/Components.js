import React, { Component } from 'react'

class Components extends Component {

    addnos(a,b){
        return a+b;
    }

    render() {
        return (
            <div>
                <p>4.Components</p>
                <h1>This is Class Components</h1>
                <p>Props</p>
                <h3>2+2 = {this.addnos(2,2)}</h3>
            </div>
        )
        
    }
}

export default Components
