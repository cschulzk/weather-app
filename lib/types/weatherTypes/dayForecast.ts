import { AirQuality } from "./airQuality";
import { Astro } from "./astro";
import { HourForecast } from "./hourForecast";
import { WeatherCondition } from "./weatherCondition";

export interface DayForecast {
  date: string;
  date_epoch: number;
  readonly day: {
  readonly maxtemp_c: number;
  readonly maxtemp_f: number;
  readonly mintemp_c: number;
  readonly mintemp_f: number;
  readonly avgtemp_c: number;
  readonly avgtemp_f: number;
  readonly maxwind_mph: number;
  readonly maxwind_kph: number;
  readonly totalprecip_mm: number;
  readonly totalprecip_in: number;
  readonly totalsnow_cm: number;
  readonly avgvis_km: number;
  readonly avgvis_miles: number;
  readonly avghumidity: number;
  readonly daily_will_it_rain: number;
  readonly daily_chance_of_rain: number;
  readonly daily_will_it_snow: number;
  readonly daily_chance_of_snow: number;
  readonly condition: WeatherCondition,
  readonly uv: number;
  readonly air_quality: AirQuality}
  readonly astro: Astro
  readonly hour: HourForecast[]
}