import React, { Component } from 'react'
import {Consumer} from './WeatherContaxt';

import SingleDayWeather from './SingleDayWeather';

class ResponseComponent extends Component {
    render() {
        const week = ['Sunday', 'Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        return (
        <Consumer> 
            {(value) => {
                if(!value.state.responseData.city)
                    return '';

                const data = value.state.responseData.list;
                let _date = new Date(data[0].dt_txt);

                return (
                    <>
                    <div className="page-content page-container" id="page-content"
                        style={{display:"inline-block", marginTop:"10px"}}>  
                        <div className="col-lg-8 grid-margin stretch-card"> 
                            <div className="card card-weather"
                                style={{minWidth:"800px" }} > 
                                <div className="card-body" style={{height:"200px"}}> 
                                    <h3>{value.state.responseData.city.name ? 
                                            (`${value.state.responseData.city.name}, ${value.state.responseData.city.country}` ) : 
                                            'Unknown' }</h3>
                                    <p className="text-gray"> <span className="weather-date">{_date.toDateString()}</span> </p>
                                    <img src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`}
                                                width="50px" height="50x" alt="img"
                                                style={{backgroundColor:"#0000004a", borderRadius:"50%"}} />
                                    <h4 className="display-3">{data[0].main.temp} <span className="symbol">°</span>C</h4>
                                    <p> {data[0].weather[0].description} </p>
                                </div>
                                <div className="card-body p-0">
                                    <div className="d-flex weakly-weather">
                                    {
                                    ( () => {
                                        let _html = [];
                                        let prevDate = '';
                                        
                                        data.forEach(item => {
                                            if(prevDate.substring(0, 10) === item.dt_txt.substring(0, 10))
                                                return;

                                            prevDate = item.dt_txt;
                                            _date = new Date(prevDate); 
                                            
                                            _html.push(<SingleDayWeather key={prevDate} day={week[_date.getDay()]} item={item} />);
                                            // _html.push((
                                            //     <div className="weakly-weather-item">
                                            //         <h6 className="mb-1"> <b>{week[_date.getDay()]}</b> </h6>  
                                            //         <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                            //             width="50px" height="50x" alt="img"
                                            //             style={{backgroundColor:"rgba(14, 177, 55, 0.61)", borderRadius:"30%"}} />
                                            //         <p className="mb-0"> {item.main.temp}° </p>
                                            //     </div>
                                            // ));
                                        });  
                                        
                                        return _html; 
                                        } )()
                                    } 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                
                    </>
                )
            }
            }
        </Consumer> 
        )
    }
}

export default ResponseComponent
