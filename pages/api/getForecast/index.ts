// Logic imports
import fetchForecast from '@/lib/backend/fetchForecast'
// Typing imports
import type { NextApiRequest, NextApiResponse } from 'next'
import { APIerror, ForecastResponse } from '@/lib/types/apiResponses'

const getForecast = async (
  req: NextApiRequest,
  res: NextApiResponse<ForecastResponse | APIerror>
) => {
  if (req.url) {
    // Create a URL object to extract the query parameters
    // The URL constructor needs a valid base to prepend to the '/api/...' URL, it doesn't matter what the base is.
    const { searchParams } = new URL(req.url, 'http://a')
    const location = searchParams.get('location')
    const days = searchParams.get('days')
    const checkedParams = checkParams({location: location, days: days})
    if (checkedParams.location) {
      const current = await fetchForecast(checkedParams.location, checkedParams.days)
      return res.status(200).json(current)
    } else if (checkedParams.error) {
      return res.status(400).json(checkedParams)
    }
  }
  res.status(400)
}

// Check the search parameters to make sure they are valid.
// The permissive 'any' type is used for the inputs because we are not assuming the inputs are valid.
const checkParams = ({location, days}: {location: string | null, days: string | null}) => {
    // If either the location or days parameter is not present, return an error.
    if (!location) {
      return {error: 'Missing location parameter'}
    } else if (!days) {
      return {error: 'Missing days parameter'}
    }
    try {
      const checkNum = Number(days)
      // If the days parameter in not an integer, return an error.
      if (!Number.isInteger(checkNum)) {
        return {error: 'Days parameter must be an integer'} 
     }
    } catch (err) {
      // If the days parameter is not a number, return an error.
      return {error: 'Days parameter must be a number'}
    }
    return {location, days}
}

export default getForecast;