import { Weather, WeatherLocation } from '../model/Weather';
import { ENV_CONFIG } from '../EnvConfig';
import http from '../helper/http';
import { AxiosResponse } from 'axios';

const ERROR_200: Error = new Error('Failed to read location data');

if (ENV_CONFIG.WEATHER_API_KEY === undefined) {
  throw new Error(
    'No Open Weather API Key defined - ensure you set a variable called REACT_APP_OPEN_WEATHER_API_KEY'
  );
  console.log(
    'If data not loaded you need to set API key from  http://api.openweathermap.org'
  );
}

const keyQuery = `appid=${ENV_CONFIG.WEATHER_API_KEY}`;

const searchLocation = async (term: string): Promise<AxiosResponse> => {
  const result = await http.get<WeatherLocation>(
    `/weather?q=${term}&${keyQuery}`
  );

  if (result?.status !== 200) {
    throw ERROR_200;
  }

  return result;
};

const readWeather = async (locationId: number): Promise<Weather[]> => {
  const current = await http.get<Weather[]>(
    `${ENV_CONFIG.WEATHER_API_URL}/weather?id=${locationId}&${keyQuery}&units=metric`
  );

  if (current.status !== 200) {
    throw ERROR_200;
  }

  return current?.data;
};

const readForecast = async (locationId: number): Promise<Weather[]> => {
  const forecast = await http.get<Weather[]>(
    `${ENV_CONFIG.WEATHER_API_URL}/forecast?id=${locationId}&${keyQuery}&units=metric&cnt=8`
  );

  if (forecast?.status !== 200) {
    throw ERROR_200;
  }

  return forecast?.data['list'];
};

const WeatherService = {
  searchLocation,
  readWeather,
  readForecast,
};

export default WeatherService;
