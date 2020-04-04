import React, {Component} from 'react'

const withCounter = (WrapedComponent) => { 
    class WithCounter extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }

        increase = () =>{
            this.setState((prevState) => 
                {return {count: prevState.count + 1} }
            );
        }
        

        render() {
            return <WrapedComponent count={this.state.count} 
                                increaseCount={this.increase}
                                {...this.props} />
        }
    }
    return WithCounter;
}

export default withCounter;
