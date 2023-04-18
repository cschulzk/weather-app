import { WeatherAlert } from "./weatherTypes/alert";
import { CurrentWeather } from "./weatherTypes/current";
import { DayForecast } from "./weatherTypes/dayForecast";
import { LocationQuery, WeatherLocation } from "./weatherTypes/location";

export type APIerror = {
  readonly error: string;
}

export type ForecastResponse = {
  readonly location: WeatherLocation;
  readonly current: CurrentWeather;
  readonly forecast: {forecastday: DayForecast[]}
  readonly alerts?: {alert: WeatherAlert[]}
}

export type LocationsResponse = LocationQuery[]