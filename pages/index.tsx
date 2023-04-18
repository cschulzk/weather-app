// Libraries
import { useState } from 'react'
// Local components
import Layout from '@/lib/frontend/layout'
import SearchBar from '@/lib/frontend/searchBar'
import WeatherReport from '@/lib/frontend/weatherReport/WeatherReport'
// Local functions
import fetchWeather from '@/lib/frontend/utils/fetchWeather'
// Types and styles 
import { ForecastResponse } from '@/lib/types/apiResponses'

const WeatherHome = () => {
  const [weather, setWeather] = useState<ForecastResponse>();
  return (
    <Layout>
      <SearchBar
        placeholder={'Search by city name or zipcode'}
        callback={async (location) => setWeather(await fetchWeather(location))}
      />
      <WeatherReport forecast={weather?.forecast.forecastday} />
    </Layout>
  )
}

export default WeatherHome;
