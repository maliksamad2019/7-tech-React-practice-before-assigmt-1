import React from 'react'

function SingleDayWeather(props) {
    return (
        <div className="weakly-weather-item">
            <h6 className="mb-1"> <b>{props.day}</b> </h6>  
            <img src={`http://openweathermap.org/img/wn/${props.item.weather[0].icon}.png`}
                width="50px" height="50x" alt="img"
                style={{backgroundColor:"rgba(14, 177, 55, 0.61)", borderRadius:"30%"}} />
            <p className="mb-0"> {props.item.main.temp}° </p>
        </div>
    )
}

export default SingleDayWeather
