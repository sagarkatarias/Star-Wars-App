import { useContext } from 'react';
import { FilmContextType, FilmContext } from '../context/FilmContext';

export const useFilmContext = (): FilmContextType => {
  const context = useContext(FilmContext);
  if (!context) {
    throw new Error('useFilmContext must be used within a FilmProvider');
  }
  return context;
};
