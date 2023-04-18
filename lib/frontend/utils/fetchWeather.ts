import fetcher from "./fetcher";
import type { APIerror, ForecastResponse } from "@/lib/types/apiResponses";

const fetchWeather = async (location: string) => {
  console.log(location);
  const forecast = await fetcher(`/api/getForecast?location=${location}&days=5&aqi=yes`)
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
