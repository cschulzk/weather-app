import { WeatherLocation } from "@/lib/types/weatherTypes/location";

const getLocationString = (location: WeatherLocation | undefined) => {
  const city = location?.name;
  const region = location?.region === '' ? null : location?.region;
  const country = location?.country;
  const locationString = `${city},${region ? ` ${region},` : ''} ${country}`
  return locationString;
};

export default getLocationString;
