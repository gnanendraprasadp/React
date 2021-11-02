import React, { Component } from 'react'

class ConditionalRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            time: true
        }
    }

    render() {

        let day;
        if (this.state.time) {

            day = <div>Sun is Visible</div>
        }
        else {
            day = <div>Sun is Not Visible</div>
        }
        return <div><p>7. Conditional Rendering</p>{day}</div>;

        // return this.state.time ? <div>Sun is Visible</div>:<div>Sun is Invisible</div>

    }
}

export default ConditionalRender
