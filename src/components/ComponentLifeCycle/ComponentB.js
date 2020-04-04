import React, { Component } from 'react'

class ComponentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ComponentB '
        }
        console.log('ComponentB constructor');
    }

    componentDidMount(){
        console.log('ComponentB componentDidMount');
    }

    componentWillMount(){
        console.log('ComponentB componentWillMount');
    }

    // static getDerivedStateFromProps(props, state){

    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('ComponentB shouldComponentUpdate');
    }
    

    render() {
        console.log('ComponentB render');
        return (
            <div>
                ComponentB 
            </div>
        )
    }
}

export default ComponentB
