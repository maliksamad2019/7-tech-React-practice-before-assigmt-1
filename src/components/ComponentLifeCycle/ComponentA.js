import React, { Component } from 'react'
import ComponentB from './ComponentB';

class ComponentA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ComponentA '
        }
        console.log('ComponentA constructor');
    }

    componentDidMount(){
        console.log('ComponentA componentDidMount');
    }

    componentWillMount(){
        console.log('ComponentA componentWillMount');
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("ComponentA getDerivedStateFromProps");        
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('ComponentA shouldComponentUpdate');
    }
    

    render() {
        console.log('ComponentA render');
        return (
            <div>
                ComponentA 
                <ComponentB />
            </div>
        )
    }
}

export default ComponentA
