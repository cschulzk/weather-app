
import { DayForecast } from '@/lib/types/weatherTypes/dayForecast';
import WeatherCard from '../weatherCard';
import styles from './weatherReport.module.css'
import { useEffect, useState } from 'react';

const WeatherReport = ({forecast}: {forecast: DayForecast[] | undefined}) => {
  return (
    <div className={styles.weatherReport}>
      {/* Put an alerts section here */}
      <div className={styles.boxOfCards}>
        {forecast && forecast.map((weatherDay: DayForecast)=> {
            return (
              <WeatherCard key={weatherDay.date} weatherDay={weatherDay} />
            );
          })
        }
      </div>
    </div>
  )
};

export default WeatherReport;