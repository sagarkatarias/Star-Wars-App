import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../types/Api';
import { fetchAllFilms } from '../../api/Swapi';

export interface FilmsState {
  films: Film[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  isLoading: false,
  error: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    fetchFilmsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchFilmsSuccess(state, action: PayloadAction<Film[]>) {
      state.films = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchFilmsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFilmsStart, fetchFilmsSuccess, fetchFilmsFailure } = filmsSlice.actions;
export default filmsSlice.reducer;

type FetchFilmsStartAction = ReturnType<typeof fetchFilmsStart>;
type FetchFilmsSuccessAction = ReturnType<typeof fetchFilmsSuccess>;
type FetchFilmsFailureAction = ReturnType<typeof fetchFilmsFailure>;


export type FilmActions = FetchFilmsStartAction | FetchFilmsSuccessAction | FetchFilmsFailureAction;

// Thunk action to fetch films
export const fetchFilmsAsync = () => async (dispatch: Dispatch<FilmActions>) => {
  try {
    dispatch(fetchFilmsStart());
    const data = await fetchAllFilms();
    dispatch(fetchFilmsSuccess(data));
  } catch (error: any) {
    dispatch(fetchFilmsFailure(error.message));
  }
};