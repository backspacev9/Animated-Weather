import "./index.scss";

function CurrentWeather() {
  return (
    <div className="current-weather-block">
      <div className="block">
        <span className="temperature">11°C</span>
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
