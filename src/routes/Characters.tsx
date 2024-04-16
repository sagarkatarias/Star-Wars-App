import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducersType } from "../redux/Store";
import { Character } from "../types/Api";
import { Card, CardContent, Typography, useTheme } from "@mui/material";

const Characters: React.FC = () => {
  const [character, setCharacter] = useState({} as Character | undefined);
  const { id, name } = useParams<{ id: string; name: string }>();
  const theme = useTheme();
  const filmData = useSelector((state: ReducersType) => id ? state.filmData[Number(id)] : undefined);

  useEffect(() => {
    const filteredCharacter = filmData?.characters?.filter(
      (character: Character) => character.name === name
    )[0];
    setCharacter(filteredCharacter);
  }, [filmData, name]);

  return (
    <>
      {character ? (
        <Card sx={{ borderRadius: theme.shape.borderRadius, marginTop: 10}}>
          <CardContent>
            <Typography variant="h5">{character.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Height: {character.height}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Birth Year: {character.birth_year}
            </Typography>
            <Typography variant="h6" color="red">
              In the future can display more properties here, even fetch some more data from the API for this character
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" sx={{ marginTop: 10 }} color="white">
          Character Not Found
        </Typography>
      )}
    </>
  );
};

export default Characters;
