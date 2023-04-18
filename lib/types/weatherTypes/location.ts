// This is the typing for the 'location' object returned by the API
export interface WeatherLocation {
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly lat: number;
  readonly lon: number;
  readonly tz_id: string;
  readonly localtime_epoch: number;
  readonly localtime: string;
}

export interface LocationQuery {
  readonly id: number,
  readonly name: string;
  readonly region: string;
  readonly country: string;
  readonly lat: number;
  readonly lon: number;
  readonly url: string;
}