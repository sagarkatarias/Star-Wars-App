import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Planet, Starship } from "../../types/Api";

export interface FilmDataState {
  [episode_id: number]: {
    characters: Character[];
    starships: Starship[];
    planets: Planet[];
    isLoadingCharacters: boolean;
    isLoadingStarships: boolean;
    isLoadingPlanets: boolean;
    error: string | null;
  };
}

const initialState: FilmDataState = {};

const filmDataSlice = createSlice({
  name: "filmData",
  initialState,
  reducers: {
    fetchFilmDataStart(state, action: PayloadAction<number>) {
      const episode_id = action.payload;
      state[episode_id] = {
        characters: [],
        starships: [],
        planets: [],
        isLoadingCharacters: true,
        isLoadingStarships: true,
        isLoadingPlanets: true,
        error: null,
      };
    },
    fetchFilmDataSuccess(
      state,
      action: PayloadAction<{
        episode_id: number;
        characters: Character[];
        starships: Starship[];
        planets: Planet[];
      }>
    ) {
      const { episode_id, characters, starships, planets } = action.payload;
      state[episode_id] = {
        ...state[episode_id],
        characters,
        starships,
        planets,
        isLoadingCharacters: false,
        isLoadingStarships: false,
        isLoadingPlanets: false,
        error: null,
      };
    },
    fetchFilmDataFailure(
      state,
      action: PayloadAction<{ episode_id: number; error: string }>
    ) {
      const { episode_id, error } = action.payload;
      state[episode_id] = {
        ...state[episode_id],
        isLoadingCharacters: false,
        isLoadingStarships: false,
        isLoadingPlanets: false,
        error,
      };
    },
  },
});

export const { fetchFilmDataStart, fetchFilmDataSuccess, fetchFilmDataFailure } = filmDataSlice.actions;
export default filmDataSlice.reducer;
