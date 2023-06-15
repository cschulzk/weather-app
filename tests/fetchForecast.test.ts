import {expect, test} from '@jest/globals';
import fetchForecast from "../lib/backend/fetchForecast";

test(
  "Correct location when submiting a location name.", 
  async () => {
    const testLocation = 'Atlanta, Georgia, United States of America'
    const forecast = await fetchForecast(testLocation, '1')
    
    const city = forecast?.location?.name;
    const region = forecast?.location?.region;
    const country = forecast?.location?.country;
    const cityRegExp = /Atlanta/i;
    const regionRegExp = /Georgia/i;
    const countryRegExp = /United States of America|USA/i;
    expect(city).toEqual(expect.stringMatching(cityRegExp));
    expect(region).toEqual(expect.stringMatching(regionRegExp));
    expect(country).toEqual(expect.stringMatching(countryRegExp));
  }
);

test(
  "Correct location when submiting a US zipcode.", 
  async () => {
    const testLocation = '30189'
    const forecast = await fetchForecast(testLocation, '1')
    
    const city = forecast?.location?.name;
    const region = forecast?.location?.region;
    const country = forecast?.location?.country;
    const cityRegExp = /Woodstock/i;
    const regionRegExp = /Georgia/i;
    const countryRegExp = /United States of America|USA/i;
    expect(city).toEqual(expect.stringMatching(cityRegExp));
    expect(region).toEqual(expect.stringMatching(regionRegExp));
    expect(country).toEqual(expect.stringMatching(countryRegExp));
  }
);

test(
  "Receive 3 forecast days.",  
  async () => {
    const testLocation = '30189'
    const forecast = await fetchForecast(testLocation, '3')
    
    const numDays = forecast?.forecast?.forecastday?.length;
    expect(numDays).toEqual(5);
  }
);

test(
  "Receive empty object from API on invalid input.",  
  async () => {
    const testLocation = '30'
    // This expected error is copied from the weather API's 'API Explorer' results.
    const expectedError = {
      "error": {
          "code": 1006,
          "message": "No matching location found."
      }
  }
    const forecast = await fetchForecast(testLocation, '1')
    expect(forecast).toEqual(expectedError);
  }
);