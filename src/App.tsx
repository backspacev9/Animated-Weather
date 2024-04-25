import "./App.scss";
import CurrentWeather from "./components/currentWeather";
import ForecastWeather from "./components/forecastWeather";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <img src="./images/bg-forest.jpg" className="bg-main" alt="" />
      </div>
      <Header />
      <main>
        <div className="weather-container">
          <CurrentWeather />
          <ForecastWeather />
        </div>
      </main>
    </div>
  );
}

export default App;
