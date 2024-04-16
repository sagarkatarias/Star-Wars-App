import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import AppRouter from "./AppRouter";

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomAppBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default Layout;
