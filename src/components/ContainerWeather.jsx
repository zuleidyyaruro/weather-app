import React, { useState, useEffect } from 'react'
import Weather from './Weather';
import axios from "axios";


const ContainerWeather = ({ setweatherMain }) => {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [data, setData] = useState(undefined);

    // este useEffect trae las coordenadas de mi localización
    // y las almacena en las variables de estado 

    useEffect(() => {
        function success(position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        };
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    // Este useEffecte hace la peticion a la api y guarda los datos en la variable
    // de estado data

    useEffect(() => {
        if (longitude !== 0 && longitude !== 0) {
            const apiKey = "5d43f7a8d20ffd860e07ae2b2f927042";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            axios.get(url).then(response => {
                setData(response.data)
                setweatherMain(response.data.weather[0].main)
            })
        }
    }, [longitude, latitude])




    return (
        <div className="overlay">

            <h2>Weather App</h2>
            <div className="container-app">

                {
                    data === undefined ?
                        (<div>
                            <div
                                className="spinner-border text-success "
                                style={{ width: "20rem", height: "20rem", fontSize: "15rem" }}
                                role="status"
                            >
                                
                            </div>
                            <p className="text-center mt-5">Please wait, It's Loading...</p>
                        </div>

                        )
                        :
                        <Weather data={data} />
                }
            </div>
        </div>
    )
}

export default ContainerWeather
