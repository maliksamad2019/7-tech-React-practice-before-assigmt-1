import React, { Component } from 'react'
import ComponentRef from './ComponentRef';

class ChildComponentRef extends Component {

    constructor(props) {
        super(props)
    
        this.compRef = React.createRef();
    }
    

    render() {
        return (
            <div>
                <ComponentRef ref={this.compRef} />
                <button onClick={()=> this.compRef.current.focusInput()} >Click to Focus Component</button>

            </div>
        )
    }
}

export default ChildComponentRef
