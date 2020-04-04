import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.increment}>you hoverd [ {this.props.count} ]</h1>
            </div>
        )
    }
}

export default HoverCounter
