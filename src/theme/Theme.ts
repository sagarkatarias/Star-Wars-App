import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFE81F", 
    },
    background: {
      default: "#000000", 
      paper: "#0B3D91", 
    },
    text: {
      primary: "#CCCCCC", // White text color
      secondary: "#FFE81F", // Yellow text color for secondary elements
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem", 
      fontWeight: "bold",
      color: "#FFE81F", 
      textTransform: "uppercase", 
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#FFFFFF",
    },
    body1: {
      "& a": {
        color: "#f50057",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 10px 5px rgba(65, 158, 255, 0.8)", // Fluorescent blue box shadow
          width: 600,
        },
      },
    },
  },
});

export default theme;
