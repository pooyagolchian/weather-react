export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherLocation {
  coordination: Coordinates;
  id: number;
  name: string;
}
[];

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Weather {
  weather: WeatherConditions[];
  main: MainWeatherData;
  dt: number;
}
[];
