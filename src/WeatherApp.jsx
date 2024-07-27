import { useState } from "react";
import SearchBox from "./SearchBox";
import './WeatherApp.css'
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({});
  
  let updateInfo=(result)=>{
    setWeatherInfo(result);
  }

  return (
    <div className="main">
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
