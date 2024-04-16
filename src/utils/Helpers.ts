import { Film } from '../types/Api';

export const sortFilmsByReleaseDate = (films: Film[]): Film[] => {
  return films.slice().sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
};

export const extractIdFromUrl = (url: string) => {
    const segments = url.split('/');
    return segments[segments.length - 2]; // Retrieve the ID segment before the trailing slash
};

export const stringToLocaleNumber = (str: string) => {
  const number = parseFloat(str);
  if (isNaN(number)) {
    return str; // Return the original string if it's not a number
  }

  return Number(str).toLocaleString("de-DE") || str;
}
