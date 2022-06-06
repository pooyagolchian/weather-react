import { createSlice } from '@reduxjs/toolkit';
import { Weather, WeatherLocation } from '../model/Weather';

export interface WeatherState {
  weathers: Weather[];
  currentLocation: WeatherLocation[];
  forecast: Weather[];
}

const initialWeatherState: WeatherState = {
  weathers: [],
  currentLocation: [],
  forecast: [],
};

const weathersSlice = createSlice({
  name: 'weathers',
  initialState: initialWeatherState,
  reducers: {
    setWeather(state: WeatherState, action: { payload: Weather[] }): void {
      state.weathers = action.payload;
    },
    setForecast(state: WeatherState, action: { payload: Weather[] }): void {
      state.forecast = action.payload;
    },
    setLocation(
      state: WeatherState,
      action: { payload: WeatherLocation[] }
    ): void {
      state.currentLocation = action.payload;
    },
  },
});

export const weathersAction = weathersSlice.actions;

export default weathersSlice.reducer;
