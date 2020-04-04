import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increseCount = () => {
        this.setState( (prevState)=> ({count: prevState.count + 1 }) );
    }
    
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.increseCount)}
            </div>
        )
    }
}

export default Counter
