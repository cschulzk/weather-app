# Features to add
If there are weather alerts for the location, note that.

# Libs to use
Run `run cypress` once you're ready to setup E2E testing.

# To-do
Check that api calls have try/catches in place. 

Test intentionally incorrect inputs. 

If a users puts a number into the search bar, don't try fetching the suggestions. It doesn't work unless the full zipcode is entered anyways. Along that line of thought, if a user inputs a number longer than '35235-3347' (a 9 digit zip), then prompt them with an error. 
