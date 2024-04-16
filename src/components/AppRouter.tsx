import { Route, Routes } from "react-router-dom";
import Characters from "../routes/Characters";
import FilmTimeline from "../routes/FilmTimeline";
import { Box } from "@mui/material";
import NotFound from "../routes/NotFound";
import Planets from "../routes/Planets";
import Starships from "../routes/Starships";

export const AppRouter = () => {
  return (
    <Box >
      <Routes>
        <Route path="/" element={<FilmTimeline />} />
        <Route path="/characters/:id/:name" element={<Characters />} />
        <Route path="/planets/:id/:name" element={<Planets />} />
        <Route path="/starships/:id/:name" element={<Starships />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Box>
  );
};

export default AppRouter;
