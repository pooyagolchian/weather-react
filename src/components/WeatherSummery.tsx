import React, { useEffect, useState } from 'react';
import { Weather, WeatherLocation } from '../model/Weather';
import WeatherService from '../services/WeatherService';
import { WeatherEntry } from './WeatherEntry';

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummery = ({ location }: WeatherSummaryProps) => {
  const [weather, setWeather] = useState<Weather[]>(null);
  const [forecast, setForecast] = useState<Weather[]>(null);

  useEffect(() => {
    (async () => {
      if (location) {
        const [weather, forecast] = await Promise.all([
          WeatherService.readWeather(location?.id),
          WeatherService.readForecast(location?.id),
        ]);
        setWeather(weather);
        setForecast(forecast);
      }
    })();
  }, [location]);

  if (!location || !weather || !forecast) return null;

  return (
    <>
      <hr />
      <h2>{location.name}</h2>
      <WeatherEntry weather={weather} />
      <h2 className="pt-3">Forecast</h2>
      <div>
        <ol>
          {forecast.map((weather: Weather): JSX.Element => {
            return (
              <li className="col col-auto" key={weather.dt}>
                <WeatherEntry weather={weather} />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};
