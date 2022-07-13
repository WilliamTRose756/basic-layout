import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { width } from "@mui/system";
function Navbar() {
  return (
    <AppBar position="sticky" sx={{ display: { xs: "flex", sm: "none" } }}>
      <Box flex={12} sx={{ display: "flex", width: "100%" }}>
        <Toolbar flex={12} >
          <Typography variant="h6">Navbar </Typography>
          <Box>Dasboard</Box>
          <Box>Profile</Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
