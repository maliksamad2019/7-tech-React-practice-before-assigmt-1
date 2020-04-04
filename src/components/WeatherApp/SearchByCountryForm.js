import React, { Component } from 'react'
import {Consumer} from './WeatherContaxt';

class SearchByCountryForm extends Component {
    render() {
        return (
            <Consumer> 
                {(value)=>{ 
                    return (
                    <> 
                        <br />
                        Search By Country Form 
                        <form onSubmit={value.handleFormSubmit}>
                            <input type="country" name="countryname"  style={{marginRight:"5px"}}
                                    placeholder="Country Name"  /> 
                        </form>
                    </>
                    )
                }}
            </Consumer>
        )
    }
}

export default SearchByCountryForm
