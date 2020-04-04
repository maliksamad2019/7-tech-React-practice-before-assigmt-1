import React, { Component } from 'react'
import {Consumer} from './WeatherContaxt';

class SearchByGpsForm extends Component {
    render() {
        return (
            <Consumer> 
                {(value)=>{
                    return (
                        <>
                        <br />
                        Search By GPS Loc Form 
                        <form onSubmit={value.handleFormSubmit}>
                            <input type="number" name="lat" style={{marginRight:"5px"}}
                                    placeholder="Latitude" /> 
                            <input type="number" name="lon" style={{marginRight:"5px"}} 
                                    placeholder="Longitude" /> 
                            <button type="submit">Submit</button>
                        </form>
                        </>
                    )
                }}
            </Consumer>
        )
    }
}

export default SearchByGpsForm
