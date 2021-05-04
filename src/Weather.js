import React from "react";
import axios from 'axios';

export default function Weather (props){
    function handleResponse(response){
        alert(`The wather in ${props.city} is ${response.data.main.temp}`)
    }
let apiKey = "edab5056ac17d7bbccfb78a16eafdf10";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  return (<h1>Hello from react</h1>);
}