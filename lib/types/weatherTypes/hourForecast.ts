import { WeatherCondition } from "./weatherCondition";
import { AirQuality } from "./airQuality";

export interface HourForecast {
  readonly time_epoch: number;
  readonly time: string;
  readonly temp_c: number;
  readonly temp_f: number;
  readonly is_day: number;
  readonly condition: WeatherCondition,
  readonly wind_mph: number;
  readonly wind_kph: number;
  readonly wind_degree: number;
  readonly wind_dir: "N|NNE|NE|ENE|E|ESE|SE|SSE|S|SSW|SW|WSW|W|WNW|NW|NNW";
  readonly pressure_mb: number;
  readonly pressure_in: number;
  readonly precip_mm: number;
  readonly precip_in: number;
  readonly humidity: number;
  readonly cloud: number;
  readonly feelslike_c: number;
  readonly feelslike_f: number;
  readonly windchill_c: number;
  readonly windchill_f: number;
  readonly heatindex_c: number;
  readonly heatindex_f: number;
  readonly dewpoint_c: number;
  readonly dewpoint_f: number;
  readonly will_it_rain: number;
  readonly chance_of_rain: number;
  readonly will_it_snow: number;
  readonly chance_of_snow: number;
  readonly vis_km: number;
  readonly vis_miles: number;
  readonly gust_mph: number;
  readonly gust_kph: number;
  readonly uv: number;
  readonly air_quality: AirQuality
}
