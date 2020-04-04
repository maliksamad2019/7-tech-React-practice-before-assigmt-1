import React, { Component } from 'react'
import withCounter from './HOC_Component';

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increaseCount}> You Clicked [ {this.props.count} ] time</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
