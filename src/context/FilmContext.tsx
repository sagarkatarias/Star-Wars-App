import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchAllFilms } from '../api/Swapi';
import { Film } from '../types/Api';

export interface FilmContextType {
  films: Film[];
  isLoading: boolean;
}

export const FilmContext = createContext<FilmContextType | undefined>(undefined);

export const FilmProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndSetFilms = async () => {
      try {
        const data = await fetchAllFilms();
        setFilms(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching films:', error);
        setIsLoading(false);
      }
    };

    // Fetch films only if films state is empty (initial load)
    if (films.length === 0) {
      fetchAndSetFilms();
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <FilmContext.Provider value={{ films, isLoading }}>
      {children}
    </FilmContext.Provider>
  );
};
