import { Box, Typography } from "@mui/material";

import UserBox from "./UserBox";

function Leftbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <UserBox />
    </Box>
  );
}

export default Leftbar;
