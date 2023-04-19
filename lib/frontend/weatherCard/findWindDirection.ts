import { HourForecast } from "@/lib/types/weatherTypes/hourForecast";

type WindMode = {
  dir: string;
  count: number;
}

const findWindDirection = (hoursForecast: HourForecast[]) => {
  const frequency: WindMode[] = [];
  hoursForecast.forEach((hourForecast) => {
    const { wind_dir } = hourForecast;
    const index = frequency.findIndex((hour) => hour.dir === wind_dir)
    if (index !== -1) {
      // If the wind_dir is already in the frequency array, increase its count
      frequency[index].count += 1;
    } else {
      // If the wind_dir is not in the frequency array, add it to the array with count 1
      frequency.push({dir: wind_dir, count: 1});
    }
  });
  // Find the mode
  const modeCount = {count: 0}
  const mode = {dir: ''}
  frequency.forEach((freq) => {
    if (freq.count > modeCount.count) {
      mode.dir = freq.dir;
    }
  });
  return mode.dir;
};

export default findWindDirection;
