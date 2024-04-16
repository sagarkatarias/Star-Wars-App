import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import AppRouter from "./AppRouter";
import theme from "../theme/Theme";

const Layout: React.FC = () => {
  return (
   
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CustomAppBar />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
  
  );
};

export default Layout;
