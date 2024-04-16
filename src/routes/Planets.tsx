import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducersType } from "../redux/Store";
import { Planet } from "../types/Api";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { stringToLocaleNumber } from "../utils/Helpers";

const Planets: React.FC = () => {
  const [planet, setPlanet] = useState({} as Planet | undefined);
  const { id, name } = useParams<{ id: string; name: string }>();
  const theme = useTheme();
  const filmData = useSelector((state: ReducersType) => id ? state.filmData[Number(id)] : undefined);

  useEffect(() => {
    const filteredPlanet = filmData?.planets?.filter(
      (planet: Planet) => planet.name === name
    )[0];
    setPlanet(filteredPlanet);
  }, [filmData, name]);

  return (
    <>
      {planet ? (
        <Card sx={{ borderRadius: theme.shape.borderRadius, marginTop: 10}}>
          <CardContent>
            <Typography variant="h5">{planet.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Climate: {planet.climate}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Terrain: {planet.terrain}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Population: {stringToLocaleNumber(planet.population)}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Diameter: {stringToLocaleNumber(planet.diameter)}
            </Typography>
            <Typography variant="h6" color="red">
              In the future can display more properties here, even fetch some more data from the API for this planet
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 10}} color="white">
          Planet Not Found
        </Typography>
      )}
    </>
  );
};

export default Planets;
