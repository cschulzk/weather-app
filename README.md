# Weather APP & API
This applet is a sandbox for testing out new UI/UX frameworks and packages. 
## Dev Notes
As an introductory note, the free version of the weatherAPI only allows for 3-day forecasts. The trial version (which my API key is on) allows for 14 days (https://www.weatherapi.com/pricing.aspx). I'm not sure what kind of reponse is sent if you request more than 3 days with a free version API key (I can't test it becasue mine is in the Pro trial). It may break the code. Once the API key transistions to the free version, the number of days that can be requested will need to be capped at 3.  

Both Typescript and ESLint are used to help reduce the number of bugs in the code and to detect any issues before production.  

I opted to keep the references to the Weather API in the backend behind the Next API. That way the backend resources aren't exposed. The API key and baseURL are environment variables.  

The wind speed and direction is not provided on a day basis. You can get current wind speed and direction or you can get hourly wind speed and direction forecasts (you can get the max wind speed forecast for a day, but not with a direction). To provide a wind speed and direction for the day, I took the min and max of the hourly wind speeds and displayed those as a range. To get the direction, I took the mode of the hourly wind directions. A method that provided a range of wind direcetions would be preferable, but that was not possible in the time constraints.    

All of the 'fetch' variety of tests depend on the weather API being accessible. These will automatically fail if the weather API goes down. Additionally, for these tests to function properly, the environmental variable must be set correctly. The environmental variables are set through the Vercel interface and Github 'Secrets' and 'Variables' interfaces.

### Justification for packages
- dependencies: {  
"next": "13.3.0",  -- Preference
"react": "18.2.0",  
"react-dom": "18.2.0"  
}  
- devDependencies: {  
"@testing-library/jest-dom": "^5.16.5", -- For using jest to test functions  
"@testing-library/react": "^14.0.0",  -- For using jest to test functions  
"@types/jest": "^29.5.0", -- Type definitions for full TypeScript coverage   
"@types/node": "18.15.11", -- Type definitions for full TypeScript coverage  
"@types/react": "18.0.35",  -- Type definitions for full TypeScript coverage  
"@types/react-dom": "18.0.11",  -- Type definitions for full TypeScript coverage  
"cypress": "^12.9.0",  -- For E2E and component testing
"dotenv": "^16.0.3", -- Jest needs this for reading the environment variables from the .env
"eslint": "8.38.0", -- A linter is necessary for writing production code. I don't want to waste time with weird test/production crashes that have to be debugged.  
"eslint-config-next": "13.3.0", -- If you're gonna have a linter, it should play nice with your framework   
"eslint-plugin-cypress": "^2.13.2", -- The linter should also play nice with the testing library   
"jest": "^29.5.0", -- Because unit tests are integral to good code hygeine. 
"jest-environment-jsdom": "^29.5.0", -- For setting up the Jest test environment 
"ts-jest": "^29.1.0", -- Required for testing the Typescript code with Jest.  
"ts-node": "^10.9.1", -- Required for testing the Typescript code with Jest.  
"typescript": "5.0.4" -- Because this is 2023 and you should be using types in your code. Even Python is doing it.  
}  

### How to run the app in development mode & test:
Before running or testing the app, run `npm install` to install the dependencies.
#### To run the app in development mode
Use `npm run dev` to start the app in development mode
#### To test the app in development mode
To run the jest tests, the app doesn't need to be in development mode (it can be, but it doesn't matter). In a new terminal run `npm test` to run the Jest tests. The tests will print output to the command line.

To run the Cypress tests, the app needs to first be in development mode. With the app in development mode, use the command `npm run cypress` to open the Cypress testing module. Select the 'E2E Testing'. Select your preferred browser click 'Start E2E Testing in {browser}'. This should navigate you to the 'Specs' page. There are two specs defined 'layout_spec' and 'search_function_spec'. Click on the spec you want to run to view the results.

## Future Improvements
Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:  
  I think that the code should use URL routing facilitated by the Next file structure. I ended up deciding to build this as a one-page application, but I don't love it. I'd want to add a '/weather' folder in the pages directory with a dynamic '[location]' route for each locations forecast. That would facilitate adding more features to the weather report page in the future without cluttering the code.  

- Refactoring:  
  Fully fleshing out testing. This project doesn't currently have component tests, just a couple E2E tests and a couple unit tests. More E2E tests should be built and component tests need to be configured and built.  

  I would narrow the typing on the API request objects. There are a lot of values that are date-like string, or postive number, and such that could have their typing narrowed more. This would require understanding and studying the API more than I had time for. Narrowing types can help faciliate smoother collaboration between engineers.  

  If access to the API data structure were possible, I'd like to put in a test data point for verifying that endpoints are working correctly. This could just be a simple object that has all of the same properties as a regular response object, but it's values would be static and predictable. Otherwise you can't really test that the data being pulled is correct (beyond testing the dates and location names).  

  The weather cards are quite ugly. Their design needs to be improved quite a bit. They are functional and readable, just not pretty.
   
- Additional Features:  
  An hourly forecast would be great. The API can give you down to 15 minutes increments. That might be a bit obscene, but it would be fun to build out that interface.

  Some form of user accounts would be good. This would allow for persistence of unit preferences and features like a default location.  

  I'd like to add a feature that uses the clients location to fetch the local weather for the user. This would be pretty simple to implement with the Geolocation API and a useEffect that waits for the user to allow permission.

  The homepage also needs more content. It's just a lot of blank space when you load (and even after the forecast is shown). This could be some weather related content, like the phases of the moon or something.  
