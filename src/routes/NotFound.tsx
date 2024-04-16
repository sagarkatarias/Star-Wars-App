import { Box, Typography } from "@mui/material";

const NotFound = () => {
  console.log("Not Found");
  return (
    <Box sx={{marginTop: 5}}>
      <Typography variant="h3" color="yellow">Page Not Found</Typography>
    </Box>
  );
};
export default NotFound;
