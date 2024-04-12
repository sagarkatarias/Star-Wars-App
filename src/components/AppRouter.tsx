import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
