import "./index.scss";
import WeatherCard from "./weather-card";
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
