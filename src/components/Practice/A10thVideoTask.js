import React, { Component } from 'react'

export default class A10thVideoTask extends Component {
    constructor(){
        super();
        this.state = {
            message: 'Hello Mask'
        }
    }
    HandleSubscribe(){
        this.setState({message: 'Thank you for Subscribing...'})
        console.log('handling subscibe btn click');
        
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.HandleSubscribe()}>Subscrib</button>
            </div>
        )
    }
}
