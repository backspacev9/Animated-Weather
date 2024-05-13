export interface GeolocationResp extends Array<GeolocationResp> {
  name: string;
  local_names: {};
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface ICurrentWeather {
  weather: [
    {
      id: number;
      main: string;
      discription: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    fills_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

export interface IForecastWeather {
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
      };
      weather: [
        {
          id: number;
          main: string;
          discription: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
    }
  ];
}

export interface ErrResponse {
  cod: number;
  message: string;
}
