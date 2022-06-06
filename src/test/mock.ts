interface WeatherMock {
  weather: { id: number; main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  dt: number;
}

export const MOCK_WEATHER: WeatherMock[] = [
  {
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    main: {
      temp: -0.25,
      feels_like: -7.25,
      temp_min: -2.81,
      temp_max: 2.19,
      pressure: 1015,
      humidity: 36,
    },
    dt: 1645311004,
  },
];
