// Libraries
import type { GetServerSideProps } from 'next/types'
// Local components
import Layout from '@/lib/frontend/layout'
import WeatherReport from '@/lib/frontend/weatherReport/WeatherReport'
// Local functions
import weatherFetcher from '@/lib/backend/utils/weatherFetcher'
// Types and styles 
import type { ForecastResponse } from '@/lib/types/apiResponses'

const WeatherHome = ({weather}: {weather: ForecastResponse}) => {
  return (
    <Layout>
      <WeatherReport weather={weather} />
    </Layout>
  )
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const location = params?.location;
  const days = 3;
  if (params) {
    const weather: ForecastResponse = await weatherFetcher('/forecast.json', `q=${location}&days=${days}&aqi=yes&alerts=yes`).then(res => res.json());
    return {
        props: {
          weather,
        },
      };
  };
  return {
    props: {
      // weather,
    },
  };
};

export default WeatherHome;
