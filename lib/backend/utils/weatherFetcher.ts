import { apiConfig } from "./weatherConfig";

const weatherFetcher = async (url: string, query:string) => {
  return await fetch(
    `${apiConfig.base_url}${url}?key=${apiConfig.api_key}&${query}`, 
    {
      method: "GET",
    }
  )
};

export default weatherFetcher;