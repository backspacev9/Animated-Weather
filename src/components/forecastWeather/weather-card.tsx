import "./weather-card.scss";
function WeatherCard() {
  return (
    <div className="weather-card">
      <img src="./icons/clouds.svg" alt="" />
      <span className="temperature">10°C</span>
      <span className="weekday">Monday</span>
      <span className="date">24.04.24</span>
    </div>
  );
}
export default WeatherCard;
