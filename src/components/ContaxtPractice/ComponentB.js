import React, { Component } from 'react'
import {UserConsumer} from './userContaxt';
import ComponentC from './ComponentC';

class ComponentB extends Component {
    render() {
        return (
            <UserConsumer>
                {value => {
                    return (
                        <> 
                            <h2>Welcome {value} in ComponentB</h2>
                            <ComponentC />
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default ComponentB
