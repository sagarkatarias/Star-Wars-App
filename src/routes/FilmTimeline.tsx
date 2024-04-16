import React, { useEffect } from 'react';
import { Film } from '../types/Api';
import { Box, Typography } from '@mui/material';
import FilmCard from './FilmCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsAsync } from '../redux/reducers/FilmReducer';
import { ReducersType } from '../redux/Store';

const FilmTimeline: React.FC = () => {
  const dispatch = useDispatch();
  const { films, isLoading } = useSelector((state: ReducersType) => state.films);

  useEffect(() => {
    if (!films.length) {
      dispatch(fetchFilmsAsync() as any);
    }
  }, [dispatch, films.length]);

  return (
    <Box p={4}>
      <Typography variant="h2" sx={{ mt: 2 }}>
        Star Wars Film Timeline
      </Typography>
      {!isLoading ? (
        films.map((film: Film) => <FilmCard key={film.title} film={film} />)
      ) : (
        <Typography variant="h6">Loading Films TimeLine</Typography>
      )}
    </Box>
  );
};

export default FilmTimeline;
