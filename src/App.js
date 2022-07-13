import { Box, Stack, Container } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import UserBox from "./components/UserBox";

function App() {
  return (
    <Container>
      <Box sx={{ border: "solid black" }}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Leftbar />
          <Rightbar />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
