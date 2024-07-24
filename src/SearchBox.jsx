import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';


export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try{
      
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      let data = await response.json(); 
      console.log(data);
      let result ={
        city: city,
        temp: data.main.temp,
        windspeed:data.wind.speed,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      }
      console.log(result);
      updateInfo(result);
    }catch(err){
      setError(true);
      throw err;
    }

  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    getWeatherInfo();
    setCity("");
    setError(false);
  };

  useEffect(()=>{
    async function getWeatherData(){
      let response = await fetch(
        `${API_URL}?q=Ranchi&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      let data = await response.json(); 
      console.log(data);
      let result ={
        city: "Ranchi",
        temp: data.main.temp,
        windspeed:data.wind.speed,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      }
      updateInfo(result);
    }
    getWeatherData();
  },[]);

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField 
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          id="city"
          label="City Name"
          variant="outlined"
          required
        />
        <Button id="button" onClick={handleSubmit} variant="contained">
          Search
        </Button>
        {error && <Alert severity="error">Please enter a valid City.</Alert>}
      </form>
    </div>
  );
}
