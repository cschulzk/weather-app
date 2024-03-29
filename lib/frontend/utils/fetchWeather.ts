import fetcher from "./fetcher";
import type { APIerror, ForecastResponse } from "@/lib/types/apiResponses";

const fetchWeather = async (location: string) => {
  // Change the default days query parameter to 3 once your API key transistions to the free version
  const forecast = await fetcher(`/api/getForecast`, {location: location, days: 3})
  .then((res: ForecastResponse | APIerror) => {
    return res;
  },
  (reason) => {console.error(reason)});
  return typeGuardForecast(forecast);
};

const typeGuardForecast = (forecast: ForecastResponse | APIerror | void) => {
  if ((forecast as ForecastResponse)?.location !== undefined) {
    return forecast as ForecastResponse;
  } else {
    (forecast as APIerror)?.error !== undefined ? console.error(forecast) : null;
    return {} as ForecastResponse;
  }
}


export default fetchWeather;
