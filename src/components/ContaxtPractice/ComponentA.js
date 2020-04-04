import React, { Component } from 'react'
import {UserConsumer} from './userContaxt';
import ComponentB from './ComponentB';

class ComponentA extends Component {
    render() {
        return (
            <UserConsumer>
                {value => {
                    return (
                        <> 
                            <h2>Welcome {value} in ComponentA</h2>
                            <ComponentB />
                        </>
                    )
                }}
            </UserConsumer>
        )
    }
}

export default ComponentA
