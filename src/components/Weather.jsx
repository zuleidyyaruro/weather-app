import React, { useState, useEffect } from 'react'

const Weather = ({ data }) => {

    
    const [icon, setIcon] = useState("");
    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`

    const [isCelsius, setIsCelcius]=useState(true);

    const handleChangeIsCelcius=()=>{
        setIsCelcius(!isCelsius);
    }

    useEffect(() => {
        setIcon(data.weather[0].icon)
    }, [data.weather])

    return (
        <div className="container border">
            <h2 className="">{data.name}, <span>{data.sys.country}</span></h2>
            
            {
                isCelsius ?
                    <p className="title">{data.main.temp} °c</p>
                :
                    <p className="title">{Math.round(data.main.temp*(9/5)+32)} °f</p>
            }

            <img src={url} alt="" />
            <p className="description">{data.weather[0].description}</p>
            <p className="text-small">winds speed: {data.wind.speed} m/s</p>
            <p className="text-small">humidity: {data.main.humidity} %</p>
            <p className="text-small">presure: {data.main.pressure} m/b</p>
            <button onClick={handleChangeIsCelcius} >Degrees °F/°C</button>
        </div>
    )
}

export default Weather
