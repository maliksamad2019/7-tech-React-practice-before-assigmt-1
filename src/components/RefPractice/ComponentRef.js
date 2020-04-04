import React, { Component } from 'react'

 class ComponentRef extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        console.log('This is Child COmponet Focus Funciton()...');
        
        this.inputRef.current.focus();
    }
     
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default ComponentRef
