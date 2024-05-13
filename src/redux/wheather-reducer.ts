import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICurrentWeather, IForecastWeather} from "../components/api/interfaces";
import {GetCurrentWeatherByName} from "../components/api";
import axios, {AxiosError} from "axios";

interface IWeatherStore {
  currentWeather: ICurrentWeather;
  forecastWeather: IForecastWeather;
}

const initialState: IWeatherStore = {
  currentWeather: {} as ICurrentWeather,
  forecastWeather: {} as IForecastWeather,
};

export const getBoards = createAsyncThunk(
  "reducer/getCurrentWeatherByName",
  async (name: string, {rejectWithValue, dispatch}) => {
    try {
      const res = await GetCurrentWeatherByName(name);
      return res;
    } catch (error) {
      if (error instanceof AxiosError) {
        // dispatch(handleErrors(error));
        // return rejectWithValue(error?.response?.data);
      }
    }
  }
);

export const weatherReducer = createSlice({
  name: "weatherReducer",
  initialState,
  reducers: {
    setCurrentWeather(state, action: PayloadAction<ICurrentWeather>) {
      state.currentWeather = action.payload;
    },
    setForecastWeather(state, action: PayloadAction<IForecastWeather>) {
      state.forecastWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    //   builder.addCase(getBoards.pending, (state) => {
    //     state.isFetch = true;
    //   });
    //   builder.addCase(getBoards.fulfilled, (state, action) => {
    //     state.isFetch = false;
    //     if (action.payload) {
    //       state.boards = action.payload;
    //     }
    //   });
    //   builder.addCase(getBoardByID.pending, (state) => {
    //     state.isFetch = true;
    //   });
    //   builder.addCase(getBoardByID.fulfilled, (state, action) => {
    //     state.isFetch = false;
    //     if (action.payload) {
    //       state.currentBoard = action.payload;
    //       state.currentBoard.columns = state.currentBoard.columns.sort((a, b) =>
    //         a.order > b.order ? 1 : -1
    //       );
    //     }
    //   });
    //   builder.addCase(createOneBoard.fulfilled, () => {});
    //   builder.addCase(deleteOneBoard.fulfilled, () => {});
    //   builder.addCase(updateOneBoard.fulfilled, () => {});
  },
});

export const {setCurrentWeather, setForecastWeather} = weatherReducer.actions;

export default weatherReducer.reducer;
