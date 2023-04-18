# Weather APP & API

## Do not place this prompt or the corresponding code in a public repository!

---

## Assignment:

Your task is to utilize the free tier of https://www.weatherapi.com/ to build a web application that displays the 5 day forecast for a given location. The application must display the following information for each day, feel free to add additional information if you see fit:

- Date
- Temperature (High & Low)
- Humidity
- Precipitation
- Wind Speed & Direction
- Appropriate Weather Icon

The application should also have a search capability that allows users to search for a location by city name or zip code. The search should be case-insensitive and handle errors gracefully if the user enters an invalid location.

You should implement best practices with the UI and make the application mobile-responsive.

You may use whatever framework or library you find useful, **but React is preferred**. URL routing is optional. Use a responsive design to ensure the application works well on mobile devices as well as desktop.

Your first goal is to have a working app, but feel free to improve the application however you see fit.

## Dev Notes

As a side note, the free version of the weatherAPI only allows for 3-day forecasts. The trial version (which my API key is on) allows for 14 days though.

Since your prefered framework is NextJS, I used a NextJS template app to generate the boilerplate for a Next app with TypeScript and ESLint.

Opted to keep the references to the Weather API in the backend behind the apps API. That way the backend resources aren't exposed.

The wind speed and direction is not provided on a day basis. You can get current wind speed and direction or you can get hourly wind speed and direction forecasts (you can get the max wind speed forecast for a day, but not with a direction). To provide a wind speed and direction for the day, I took the min and max of the hourly wind speeds and displayed those as a range. To get the direction, I took the mode of the wind directions for each hour.

All of the 'fetch' variety of tests depend on the weather API being accessible. These will automatically fail if the weather API goes down.

all of the 'jest' packages are needed for running jest tests in TypeScript
ts-node is required to have the jest config in TypeScript
dotenv is required to setup the environmental variables for jest

### How to run the app in development mode & test:
Before running or testing the app, run `npm install` to install the dependencies.
#### To run the app in development mode
Use `npm run dev` to start the app in development mode
#### To test the app in development mode


### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:
- Refactoring:
  I would narrow the typing on the API request objects. There are a lot of values that are date-like string, or postive number, and such that could have their typing narrowed more. This would require understanding and studying the API more than I had time for. Narrowing types can help faciliate smoother collaboration between engineers.

  If access to the API data structure were possible, I'd like to put in a test data point for verifying that endpoints are working correctly. This could just be a simple object that has all of the same properties as a regular response object, but it's values would be static and predictable. Otherwise you can't really test that the data being pulled is correct (beyond testing the dates and location names). 
   
- Additional Features:
  Some form of user accounts would be good. This would allow for persistence of preferences and features like a default locaiton to view.

  Add a feature that automatically fetches the weather for the users current location. This would be pretty simple to implement with the Geolocation API and a useEffect that waits for the user to allow permission.
