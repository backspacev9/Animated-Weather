import axios, {AxiosError} from "axios";
import {currentURL} from "../../contants";
import {ICurrentWeather, ErrResponse} from "./interfaces";
import {Console} from "console";
export const GetGeolocation = async (city: string) => {};

export const GetCurrentWeatherByName = async (name: string) => {
  try {
    const {data} = await axios.get<ICurrentWeather | number>(
      `${currentURL}&units=metric&q=${name}`
    );
    return data;
  } catch (er) {
    if (axios.isAxiosError(er)) {
      return er.response?.status;
    }
  }
};

export const GetCurrentWeatherByCoord = async (lat: number, lon: number) => {};
export const GetForecastWeather = async (lat: number, lon: number) => {};
