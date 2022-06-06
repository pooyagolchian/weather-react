import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LocationSearch } from './components/LocationSearch';
import { LocationTable } from './components/LocationTable';
import { WeatherSummery } from './components/WeatherSummery';
import { WeatherLocation } from './model/Weather';
import WeatherService from './services/WeatherService';
import { weathersAction } from './store/weathers';
import { RootState } from './store';

const App = () => {
  const locationState = useSelector((state: RootState): WeatherLocation[] => {
    return state?.weathers.currentLocation;
  });

  const [locations, setLocations] = useState([...locationState]);
  const [error, setError] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation>(null);
  const dispatch = useDispatch();

  const addLocation = async (term: string) => {
    try {
      resetAlert();
      const location = (await WeatherService.searchLocation(term))?.data;
      const duplicate = locations.find((item) => item?.id === location.id);
      if (!location) {
        setError(`No location found called ${term}`);
      }
      if (duplicate) {
        setWarning(`Location '${term}' is already in the list.`);
      }
      if (location && !duplicate) {
        setLocations([location, ...locations]);
        dispatch(weathersAction.setLocation([location, ...locations]));
      }
    } catch (error) {
      console.error(error);
      setError(`No location found called ${term}`);
    }
  };

  const resetAlert = () => {
    setError('');
    setWarning('');
  };

  return (
    <>
      <div className="container py-5">
        <div className="d-flex flex-column col">
          <h1>Weather forecast applicaiton ⛅️</h1>
          <LocationSearch onSearch={addLocation} />{' '}
          {error ? (
            <div className={`alert alert-danger d-flex`}>{error}</div>
          ) : null}{' '}
          {warning ? (
            <div className={`alert alert-warning d-flex`}>{warning}</div>
          ) : null}
          <LocationTable
            current={currentLocation}
            locations={locations}
            onSelect={(location: WeatherLocation) =>
              setCurrentLocation(location)
            }
          />{' '}
          <WeatherSummery location={currentLocation} />
        </div>
      </div>
    </>
  );
};

export default App;
