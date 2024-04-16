import React, { useEffect } from 'react';
import { Film } from '../types/Api';
import { Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { fetchCharacters, fetchStarships, fetchPlanets } from '../api/Swapi';
import DynamicList from '../components/DynamicList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmDataFailure, fetchFilmDataStart, fetchFilmDataSuccess } from '../redux/reducers/FilmDataReducer';
import { ReducersType } from '../redux/Store';

interface FilmCardProps {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { characters, starships, planets, isLoadingCharacters, isLoadingStarships, isLoadingPlanets } = useSelector(
    (state: ReducersType) => state.filmData[film.episode_id] || {
      characters: [],
      starships: [],
      planets: [],
      isLoadingCharacters: true,
      isLoadingStarships: true,
      isLoadingPlanets: true,
    }
  );

  useEffect(() => {
    if (characters.length && starships.length && planets.length) {
      return;
    }
    // Dispatch action to fetch film-specific data when film prop changes
    dispatch(fetchFilmDataStart(film.episode_id));

    const fetchData = async () => {
      try {
        const charactersData = await fetchCharacters(film.characters);
        const starshipsData = await fetchStarships(film.starships);
        const planetsData = await fetchPlanets(film.planets);

        dispatch(
          fetchFilmDataSuccess({
            episode_id: film.episode_id,
            characters: charactersData,
            starships: starshipsData,
            planets: planetsData,
          })
        );
      } catch (error: any) {
        dispatch(fetchFilmDataFailure({ episode_id: film.episode_id, error: error.message }));
      }
    };
    fetchData();
  }, [characters.length, dispatch, film, planets.length, starships.length]);
  

  return (
    <Card sx={{ borderRadius: theme.shape.borderRadius, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5">{film.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">Director: {film.director}</Typography>
        <Typography variant="subtitle1" color="textSecondary">Release Date: {film.release_date}</Typography>
       
       
        <DynamicList items={characters} isLoading={isLoadingCharacters} routeTo={"characters"} episode_id={film.episode_id}/>
        <DynamicList items={starships} isLoading={isLoadingStarships} routeTo={"starships"} episode_id={film.episode_id}/>
        <DynamicList items={planets} isLoading={isLoadingPlanets} routeTo={"planets"} episode_id={film.episode_id}/>
       
      </CardContent>
    </Card>
  );
};

export default FilmCard;
