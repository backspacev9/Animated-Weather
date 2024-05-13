import {useEffect, useState} from "react";
import "./index.scss";
import {GetCurrentWeatherByName} from "../api";
import {ErrorCodes} from "../../contants";

interface CurrentWeatherProps {
  handleError: (text: string) => void;
}

function CurrentWeather({handleError}: CurrentWeatherProps) {
  const [temperature, setTemperature] = useState(0);

  const getCurWeather = async () => {
    const res = await GetCurrentWeatherByName("Vitebsk");

    if (typeof res == "number") {
      const val = res ? Object.entries(ErrorCodes).find((el) => el[0] === res.toString())?.[1] : "";
      handleError(val ? val : "");
    } else {
      if (res) {
        console.log(res);
        setTemperature(Math.round(res?.main.temp));
      }
    }
  };

  useEffect(() => {
    getCurWeather();
  }, []);

  return (
    <div className="current-weather-block">
      <div className="block">
        <span className="temperature">{temperature}°C</span>
        <span className="feels">Feels like: 9°C</span>
        <span className="location">Vitebsk, Belarus</span>
        <span className="date">Tuesday - 24.04.24</span>
      </div>
      <div className="block">
        <img src="./icons/clouds.svg" alt="cloud" />
        <span className="status">Cloudy</span>
        <span className="time">9:00</span>
      </div>
      <div className="block info">
        <li className="humidity">
          <span>Humidity:</span>
          <span>9:00</span>
        </li>
        <li className="pressure">
          <span>Pressure:</span>
          <span>9:00</span>
        </li>
        <li className="wind">
          <span>Wind:</span>
          <span>9:00</span>
        </li>
      </div>
    </div>
  );
}
export default CurrentWeather;
