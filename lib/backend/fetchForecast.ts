import { ForecastResponse } from "../types/apiResponses";
import weatherFetcher from "./utils/weatherFetcher";
// This function has a 'days' argument that is effectively unused at the moment (the frontend is only passing 5 to the argument).
// It's left as a generalized 'days' arguement here for future features that provide variable day forecasts.
const fetchForecast = async (location: string, days: string) => {
  const current: ForecastResponse = 
    await weatherFetcher('/forecast.json', `q=${location}&days=${days}&aqi=yes&alerts=yes`)
    .then(res => res.json());
  return current;
}

export default fetchForecast;