# What is the application about?

The application is a React/Typescript Star Wars themed application. The app on the home page fetches all the star wars films from SWAPI api and shows the timeline of all star war movies in ascending order. The information from each card is stored in redux state on first load of the application and the state is persisted throughout the navigation of the app. You can navigate to different characters, planets, starships in the movie and read more information about them. And if you navigate back to home by clicking "Star Wars App" in the navigation bar, you dont fetch all the data from the server again. 
Also during initial page load, concept of lazy loading is used by displaying spinners for non loaded assets in a card. 
Not found page is added for routes that dont exist. 
The focus has been on structuring the app in a manner that it is scalable in the future.
I have also added a context for loading Films on initial render just to showcase use of Context Api, however it is not used in the App anywhere.

# Libraries used

- Material UI
- Redux
- EsLint
- React-router-dom
- Axios


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

