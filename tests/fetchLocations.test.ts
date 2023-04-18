import { LocationQuery } from "@/lib/types/weatherTypes/location";
import fetchLocations from "../lib/backend/fetchLocations";

test(
  "Check that searching a substring returns releveant locations.",  
  async () => {
    const query = 'pari'
    const search = await fetchLocations(query)
    // This expected results is copied from the weather API's 'API Explorer' results.
    const expectedResult: LocationQuery = {
      "id": 803267,
      "name": "Paris",
      "region": "Ile-de-France",
      "country": "France",
      "lat": 48.87,
      "lon": 2.33,
      "url": "paris-ile-de-france-france"
  }
    expect(search).toContainEqual(expectedResult);
  }
);

test(
  "Check that searching a zip code returns the correct location.",  
  async () => {
    const query = '30189'
    const search = await fetchLocations(query)
    // This expected results is copied from the weather API's 'API Explorer' results.
    const expectedResult: LocationQuery = {
      "id": 4018953,
      "name": "Woodstock",
      "region": "Georgia",
      "country": "United States of America",
      "lat": 34.13,
      "lon": -84.56,
      "url": "woodstock-georgia-united-states-of-america"
    }
    expect(search).toContainEqual(expectedResult);
  }
);