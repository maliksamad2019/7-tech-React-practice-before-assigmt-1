import React, { Component } from 'react'
import withCounter from './HOC_Component';

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.increaseCount}> You Hoverd [ {this.props.count} ] time on this Heading...</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
