import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="bg-container">
        <img src="./images/bg-forest.jpg" className="bg-main" alt="" />
      </div>
      <header className="App-header">
        <div className="search-box">
          <img src="./icons/search.svg" alt="search" />
          <input type="text" placeholder="Find your City" />
        </div>
      </header>

      <main>
        <div className="weather-container">
          <div className="current-weather-block">
            <div className="block">
              <span className="current-temperature">11°C</span>
              <span className="location">Vitebsk, Belarus</span>
              <span className="date">Tuesday - 24.04.2024</span>
            </div>
            <div className="block">
              <img src="./icons/clouds.svg" alt="cloud" />
              <span className="time">9:00</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
