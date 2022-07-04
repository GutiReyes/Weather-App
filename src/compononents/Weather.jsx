import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "../styles/weather.css";

const Weather = () => {

    const [ weatherApi, setWeatherApi] = useState({});
    const [tempeture, setTempeture] = useState(0);
    const [isFahrenheit,setIsFahrenheit] = useState(true); 


    useEffect(() => {
        const success = (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f2dcdc4cc4a06c25799f6cc6898486a`)
            .then(res => {
                setWeatherApi(res.data)
                setTempeture(Math.round(res.data.main.temp))
            });

        }
        navigator.geolocation.getCurrentPosition(success);

    },[])

    const convertFahren = Math.round(tempeture-273.15);
    const convertKelv = Math.round(tempeture+273.15);

    const convertToFahrenheit = () => {

        if(isFahrenheit){
            //Transform  to Fahrenheit
            setTempeture(convertFahren);
            setIsFahrenheit(false);

        } else{
            //Transform to Kelvin
            setTempeture(convertKelv);
            setIsFahrenheit(true)
        }

         
    } 
    console.log(tempeture);
    console.log(convertKelv);
    console.log(convertFahren);

    return (
        <div className='weather'>
            <h3>{weatherApi.name} <b>,</b>{weatherApi.sys?.country}</h3>
            <img src={`http://openweathermap.org/img/wn/${weatherApi.weather?.[0].icon}@2x.png`} alt="" />
            <h3><b>Tempeture: </b>{tempeture} {isFahrenheit ? "°K":"°F"}</h3>
            <h5><b>Humidity: </b>{weatherApi.main?.humidity}%</h5>
            <button onClick={convertToFahrenheit}>{isFahrenheit ? "Convert to Fahrenheit": "Convert to Kelvin"}</button>
        </div>
    );
};

export default Weather;