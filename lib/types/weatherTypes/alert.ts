export interface WeatherAlert {
  readonly headline: string;
  readonly msgtype: string;
  readonly severity: string;
  readonly urgency: string;
  readonly areas: string;
  readonly category: string;
  readonly certainty: string;
  readonly event: string;
  readonly note: string;
  readonly effective: string;
  readonly expires: string;
  readonly desc: string;
  readonly instruction: string;
}