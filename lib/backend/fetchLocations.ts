import { LocationsResponse } from "../types/apiResponses";
import weatherFetcher from "./utils/weatherFetcher";

const fetchLocations = async (search: string) => {
  const current: LocationsResponse = 
    await weatherFetcher('/search.json', `q=${search}`)
    .then(res => res.json());
  return current;
}

export default fetchLocations;