import React, { Component } from 'react'
import {Consumer} from './WeatherContaxt';

class SearchByCityForm extends Component {
    render() {
        return (
            <Consumer> 
                {(value)=>{
                    return (
                    <>
                        <br />
                        Search By City Form 
                        <form onSubmit={value.handleFormSubmit}>
                            <input type="text" name="cityname" style={{marginRight:"5px"}} 
                                    placeholder="City Name..." /> 
                        </form>
                    </>
                    )
                }}
            </Consumer>
        )
    }
}

export default SearchByCityForm
