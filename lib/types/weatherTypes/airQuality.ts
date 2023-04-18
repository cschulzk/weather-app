export interface AirQuality {
  readonly co: number;
  readonly no2: number;
  readonly o3: number;
  readonly so2: number;
  readonly pm2_5: number;
  readonly pm10: number;
  // Explain why the us index is from 1-6 and what the numbers mean
  readonly "us-epa-index": 1 | 2 | 3 | 4 | 5 | 6;
  // Explain why the gb index is from 1-10 and what the numbers mean
  readonly "gb-defra-index": 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ;
}