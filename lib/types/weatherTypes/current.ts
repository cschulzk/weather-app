import { AirQuality } from "./airQuality";
import { WeatherCondition } from "./weatherCondition";

// This is the typing for the 'current' object returned by the API
export interface CurrentWeather {
  readonly last_updated_epoch: number;
  readonly last_updated: string;
  readonly temp_c: number;
  readonly temp_f: number;
  readonly is_day: number;
  readonly condition: WeatherCondition,
  readonly wind_mph: number;
  readonly wind_kph: number;
  readonly wind_degree: number;
  readonly wind_dir: "N|NNE|NE|ENE|E|ESE|SE|SSE|S|SSW|SW|WSW|W|WNW|NW|NNW",
  readonly pressure_mb: number;
  readonly pressure_in: number;
  readonly precip_mm: number;
  readonly precip_in: number;
  readonly humidity: number;
  readonly cloud: number;
  readonly feelslike_c: number;
  readonly feelslike_f: number;
  readonly vis_km: number;
  readonly vis_miles: number;
  readonly uv: number;
  readonly gust_mph: number;
  readonly gust_kph: number;
  readonly air_quality: AirQuality
}