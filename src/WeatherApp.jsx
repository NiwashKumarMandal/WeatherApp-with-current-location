import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'

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
      {/* <InfoBox info={weatherInfo}/> */}
    </div>
  );
}
