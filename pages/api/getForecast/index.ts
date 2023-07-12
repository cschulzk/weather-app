// Logic imports
import fetchForecast from '@/lib/backend/fetchForecast'
// Typing imports
import type { NextApiRequest, NextApiResponse } from 'next'
import type { APIerror, ForecastResponse } from '@/lib/types/apiResponses'

const getForecast = async (
  req: NextApiRequest,
  res: NextApiResponse<ForecastResponse | APIerror>
) => {
  const { days, location } = req.body;
  // These data checks aren't currently necessary, but are in place for use in future features.
  if (!location) {
    res.status(400).json({ error: 'Location parameter required' });
  } else if (!days) {
    res.status(400).json({ error: 'Days parameter required' });
  } else {
    try {
      const checkNum = Number(days)
      // If the days parameter in not an integer, return an error.
      if (!Number.isInteger(checkNum)) {
        res.status(400).json({ error: 'Days parameter must be an integer' });
      }
    } catch (err) {
      // If the days parameter is not a number, return an error.
      res.status(400).json({ error: 'Days parameter must be a number' });
    }
  };
  const current = await fetchForecast(location, days)
  res.status(200).json(current)
  return;
};

export default getForecast;
