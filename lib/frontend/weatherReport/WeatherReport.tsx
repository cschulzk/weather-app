
import { ForecastResponse } from '@/lib/types/apiResponses';
import WeatherCard from '../weatherCard';
import styles from './weatherReport.module.css'
import { DayForecast } from '@/lib/types/weatherTypes/dayForecast';
import { WeatherLocation } from '@/lib/types/weatherTypes/location';
import getLocationString from '../utils/getLocationString';

const WeatherReport = ({weather}: {weather: ForecastResponse | undefined}) => {
  const location: WeatherLocation | undefined = weather?.location;
  // const alerts = weather?.alerts // Uncomment this once the alerts feature is integrated.
  const forecast = weather?.forecast?.forecastday
  const locationString = getLocationString(location)
  return (
    // If the location is undefined, I use the 'visibility: hidden' property to hide these elements while maintaining the layout.
    <div className={[styles.weatherReport, location ? '' : styles.hide].join(' ')}>
      {/* Put an alerts section here */}
      <h2 className={styles.locationName}>5&nbsp;Day&nbsp;Forecast&nbsp;- {locationString}</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.boxOfCards}>
          {forecast && forecast.map((weatherDay: DayForecast)=> {
              return (
                <WeatherCard key={weatherDay.date} weatherDay={weatherDay} />
              );
            })
          }
        </div>
      </div>
    </div>
  )
};

export default WeatherReport;