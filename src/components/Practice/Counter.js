import React, { Component } from 'react'

class Counter extends Component {

    state={
        count: 0
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h2>Counter Value: {this.state.count}</h2>
                <button onClick={() => this.incrementCount() }>Click To Count</button>
            </div>
        )
    }
}

export default Counter
