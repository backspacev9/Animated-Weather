import {useState} from "react";
import "./App.scss";
import CurrentWeather from "./components/currentWeather";
import ForecastWeather from "./components/forecastWeather";
import Header from "./components/header";
import {ShowMessage} from "./components/showMessage";
import {text} from "stream/consumers";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const showError = (text: string) => {
    setMessageText(text);
    setShowMessage(true);
    setTimeout(() => {
      setMessageText("");
      setShowMessage(false);
    }, 2000);
    console.log(text);
  };
  return (
    <div className="App">
      <ShowMessage text={messageText} show={showMessage} />

      <div className="bg-container">
        <img src="./images/bg-forest.jpg" className="bg-main" alt="" />
      </div>
      <Header />
      <main>
        <div className="weather-container">
          <CurrentWeather handleError={showError} />
          <ForecastWeather />
        </div>
      </main>
    </div>
  );
}

export default App;
