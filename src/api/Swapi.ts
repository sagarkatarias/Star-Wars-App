import apiInstance from './Axios';
import { Character, Film, Planet, Starship } from '../types/Api';

export const fetchCharacterWithId = async ({id} : {id: string}): Promise<Character[]> => {
  const response = await apiInstance.get(`/people/${id}`);
  return response.data.results as Character[];
};

export const fetchAllFilms = async (): Promise<Film[]> => {
  const response = await apiInstance.get('/films/');
  return response.data.results as Film[];
};

export const fetchAllPlanets = async (): Promise<Planet[]> => {
  const response = await apiInstance.get('/planets/');
  return response.data.results as Planet[];
};

// Define similar functions for Starships, Species, etc.

export const fetchCharacters = async (urls: string[]): Promise<Character[]> => {
  try {
    const promises = urls.map((url) => apiInstance.get(url));
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const fetchStarships = async (urls: string[]): Promise<Starship[]> => {
  try {
    const promises = urls.map((url) => apiInstance.get(url));
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error('Error fetching starships:', error);
    return [];
  }
};

export const fetchPlanets = async (urls: string[]): Promise<Planet[]> => {
  try {
    const promises = urls.map((url) => apiInstance.get(url));
    const responses = await Promise.all(promises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error('Error fetching planets:', error);
    return [];
  }
};
