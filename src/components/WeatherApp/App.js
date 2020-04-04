import React, { Component } from 'react'
import axios from 'axios';

import SearchByCityForm from './SearchByCityForm';
import SearchByGpsForm from './SearchByGpsForm';
import SearchByCountryForm from './SearchByCountryForm';
import ResponseComponent from './ResponseComponent';

import {Provider} from './WeatherContaxt';

import "./Template.css"; 

class App extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
            cityname: '',
            countryname: '',
            lat: '',
            lon: '',
            responseData: []
        }
    }
    
    handleFormSubmit = (e)=> {
        e.preventDefault(); 
        
        if( e.target.elements[0] ){
            this.setState( {  [e.target.elements[0].name]: e.target.elements[0].value} );
            
            if( e.target.elements[1] )
                this.setState( {  [e.target.elements[1].name]: e.target.elements[1].value} ); 
            
            const AppID = "8b36d31e7bf1fa94363fc455c7b1dd5a";
            let url = `http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=${AppID}`;
            
            // eslint-disable-next-line
            switch( e.target.elements[0].name ){
                case 'cityname':
                    console.log('Submiting City Form');
                    url += `&q=${e.target.elements[0].value}`;
                break;
                
                case 'countryname':
                    console.log('Submiting Country Form');
                    url += `&q=${e.target.elements[0].value}`;
                    break;
                    
                case 'lat':
                    console.log('Submiting GPS Form'); 
                    url += `&lat=${e.target.elements[0].value}&lon=${e.target.elements[1].value}`;
                    break;
            }

            console.log(url);
            axios.get(url).then(response => {
                console.log(response.data); 
                this.setState({responseData: response.data})
            }) 
        }  
    }
                
    render() {
        return (
            <Provider value={this} >
                <h2 style={{color:"blue"}}>Weather App</h2>
                <SearchByCountryForm />
                <SearchByCityForm />
                <SearchByGpsForm />
                <ResponseComponent />
            </Provider>
        )
    }
}

export default App
