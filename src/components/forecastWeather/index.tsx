import {useEffect} from "react";
import axios, {AxiosError} from "axios";
import {GetCurrentWeatherByName} from "../api";
import "./index.scss";
import WeatherCard from "./weather-card";
import {CurrentWeatherResp} from "../api/interfaces";

function ForecastWeather() {
  return (
    <div className="forecast-container">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
}
export default ForecastWeather;
