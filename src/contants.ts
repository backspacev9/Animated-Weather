export const currentURL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}`;
export const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}`;
export const geoURL = `http://api.openweathermap.org/geo/1.0/direct?appid=${process.env.REACT_APP_API_KEY}`;

export const ErrorCodes = {
  401: "Invalid API key",
  404: "city not found",
  429: "surpassing the limit of your subscription",
};
