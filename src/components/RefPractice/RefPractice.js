import React, { Component } from 'react'

class RefPractice extends Component {

    constructor(props) {
        super(props)
        this.fieldRef = React.createRef();
    }
    
    componentDidMount(){
        console.dir(this.fieldRef.current);
        
        this.fieldRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.fieldRef} />
            </div>
        )
    }
}

export default RefPractice
