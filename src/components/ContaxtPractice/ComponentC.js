import React, { Component } from 'react'
import {UserConsumer} from './userContaxt';

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {value => {
                    return <h2>Welcome {value} in ComponentC</h2>
                }}
            </UserConsumer>
        )
    }
}

export default ComponentC
