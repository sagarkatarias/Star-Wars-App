import { configureStore } from '@reduxjs/toolkit';
import filmsReducer, { FilmsState } from './reducers/FilmReducer';
import filmDataReducer, { FilmDataState } from './reducers/FilmDataReducer';

export interface ReducersType {
    films: FilmsState;       
    filmData: FilmDataState;
}

const store = configureStore({
  reducer: {
    films: filmsReducer,
    filmData: filmDataReducer,
  },
});

export default store;
