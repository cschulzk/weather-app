// Logic imports
import fetchLocations from '@/lib/backend/fetchLocations'
// Typing imports
import type { NextApiRequest, NextApiResponse } from 'next'
import { APIerror, CurrentWeatherResponse } from '@/lib/types/apiResponses'

const getCurrent = async (
  req: NextApiRequest,
  res: NextApiResponse<CurrentWeatherResponse | APIerror>
) => {
  if (req.url) {
    // Create a URL object to extract the query parameters
    // The URL constructor needs a valid base to prepend to the '/api/...' URL
    // It doesn't matter what the base is because we're just using it to extract the query parameters.
    const { searchParams } = new URL(req.url, 'http://a')
    const search = searchParams.get('search')
    if (!search) {
      return res.status(400).json({error: 'Missing search parameter'})
    }
    const current = await fetchLocations(search)
    return res.status(200).json(current)
  }
  res.status(400)
}

export default getCurrent;