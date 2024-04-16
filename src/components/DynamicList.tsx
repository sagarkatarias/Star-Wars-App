import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { DynamicListProps } from '../types/Components';

function DynamicList({ items, isLoading, routeTo, episode_id }: DynamicListProps) {
  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, textTransform: "uppercase" }}>
        {routeTo}:
      </Typography>
      <Typography>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link to={`/${routeTo}/${episode_id}/${item.name}`} >
              {item.name}
            </Link>
            {index < items.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
      </Typography>
    </>
  );
}

export default DynamicList;
