// Logic imports
import fetchLocations from '@/lib/backend/fetchLocations'
// Typing imports
import type { NextApiRequest, NextApiResponse } from 'next'
import { APIerror, LocationsResponse } from '@/lib/types/apiResponses'

const getCurrent = async (
  req: NextApiRequest,
  res: NextApiResponse<LocationsResponse | APIerror>
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
    const locations = await fetchLocations(search)
    // The API sometimes returns duplicates (the search 'asd' for example has two pairs of duplicates in the response),
    // so it's necessary to filter out the duplicates before returning the response. 
    const dedupedLocations = locations.filter((loc, i, array) => {
      const locID = loc.id;
      return array.findIndex(l => l.id === locID) === i;
    })
    return res.status(200).json(dedupedLocations)
  }
  res.status(400)
}

export default getCurrent;