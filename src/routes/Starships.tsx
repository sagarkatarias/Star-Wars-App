import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducersType } from "../redux/Store";
import { Starship } from "../types/Api";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { stringToLocaleNumber } from "../utils/Helpers";

const Starships: React.FC = () => {
  const [starship, setStarship] = useState({} as Starship | undefined);
  const { id, name } = useParams<{ id: string; name: string }>();
  const theme = useTheme();
  const filmData = useSelector((state: ReducersType) => id ? state.filmData[Number(id)] : undefined);

  useEffect(() => {
    const filteredStarship = filmData?.starships?.filter(
      (starship: Starship) => starship.name === name
    )[0];
    setStarship(filteredStarship);
  }, [filmData, name]);

  return (
    <>
      {starship ? (
        <Card sx={{ borderRadius: theme.shape.borderRadius, marginTop: 10}}>
          <CardContent>
            <Typography variant="h5">{starship.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Speed: {starship.max_atmosphering_speed}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Cost: {stringToLocaleNumber(starship.cost_in_credits)}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Rating: {starship.hyperdrive_rating}
            </Typography>
            <Typography variant="h6" color="red">
              In the future can display more properties here, even fetch some more data from the API for this starship
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 10 }} color="white">
          Starship Not Found
        </Typography>
      )}
    </>
  );
};

export default Starships;
