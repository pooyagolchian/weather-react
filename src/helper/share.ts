export const convertUnixTimeToDate = (unixUtc: number): Date => {
  return new Date(unixUtc * 1000);
};

export const getIconUrl = (code: string): string => {
  return `http://openweathermap.org/img/wn/${code}.png`;
};
