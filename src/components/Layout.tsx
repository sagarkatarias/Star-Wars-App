import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import CustomAppBar from "./CustomAppBar";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import theme from "../theme/Theme";
import store from "../redux/Store";

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CustomAppBar />
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
