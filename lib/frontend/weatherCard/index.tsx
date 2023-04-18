import { AppContext } from "@/lib/context/AppContext";
import { DayForecast } from "@/lib/types/weatherTypes/dayForecast";
import { useContext } from "react";
import Image from "next/image";
import styles from "./weatherCard.module.css";

const WeatherCard = ({weatherDay}: {weatherDay: DayForecast}) => {
  const {units} = useContext(AppContext);
  const dayForecast = weatherDay.day;
  const hoursForecast = weatherDay.hour;
  // The weather icons were downloaded from the weather API (with permission) and are stored in the public folder for static file serving.
  // This makes it necesasry to remove the url prefix from the API response.
  const iconPath = dayForecast.condition.icon.replace('//cdn.weatherapi.com', '')
  // The alt text for the image is simply the condition status.
  const conditionText = dayForecast.condition.text
  // Display the temperatures in the appropriate units. 
  const highTemp = 
    units.temperature === '°F' 
    ? dayForecast.maxtemp_f 
  :  dayForecast.maxtemp_c;
  const lowTemp = 
    units.temperature === '°F' 
    ? dayForecast.mintemp_f 
  : dayForecast.mintemp_c;

  // Display the chance of percipitation based on what kind of precipitation is most likely.
  // If they're equal (most frequently at 0), then just display rain as the precipitation type.
  const precipitation = 
    dayForecast.daily_chance_of_rain >= dayForecast.daily_chance_of_snow
    ? {type: 'Rain', chance: dayForecast.daily_chance_of_rain} 
  : {type: 'Snow', chance: dayForecast.daily_chance_of_snow};

  const maxWindSpeed = 
    units.distance ==='mi' 
  ? hoursForecast.reduce((prev, curr) => Math.max(prev, curr.wind_mph), 0)
  : hoursForecast.reduce((prev, curr) => Math.max(prev, curr.wind_kph), 0)

  const minWindSpeed = 
    units.distance ==='mi' 
  ? hoursForecast.reduce((prev, curr) => Math.min(prev, curr.wind_mph), 150)
  : hoursForecast.reduce((prev, curr) => Math.min(prev, curr.wind_kph), 150)

  const windUnits = units.distance ==='mi' ? 'mph' : 'kph';

  const monthText = weatherDay.date.substring(5,7).replace('0','')
  const dayText = weatherDay.date.substring(8,10).replace('0','')

  return (
    <div className={styles.cardContainer}>
      <div className={styles.atGlance}>
        <Image src={iconPath} alt={conditionText} width={50} height={50} />
        <p className={styles.dateText}>{monthText}/{dayText}</p>
      </div>
      <p className={styles.cardText}>High: {highTemp} {units.temperature}</p>
      <p className={styles.cardText}>Low: {lowTemp} {units.temperature}</p>
      <p className={styles.cardText}>Precip: {precipitation.chance}% of {precipitation.type}</p>
      <p className={styles.cardText}>Humidity: {dayForecast.avghumidity}%</p>
      <p className={styles.cardText}>Wind: {minWindSpeed}-{maxWindSpeed} {windUnits}</p>
      {/* Put a button at the bottom to allow users to view the hourly forecast */}
      {/* If hourly forecast is set to 'view' then transition a height change in this card and display hour tabs */}
    </div>
  )
};

export default WeatherCard;
