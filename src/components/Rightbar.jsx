import { Box, Typography, Container, Breadcrumbs, Link } from "@mui/material";
import ReadingWriting from "./ReadingWriting";
import StudentWorksheet from "./StudentWorksheet";

function Rightbar() {
  return (
    <>
      <Box
        flex={10}
        p={2}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Container bgcolor="black" sx={{ backgroundColor: "red" }}>
          <Typography variant="h3">SLO Editor</Typography>
        </Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            SLO Recipient Name
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Evaluations
          </Link>
          <Typography color="text.primary">Evaluation Name</Typography>
        </Breadcrumbs>
        <ReadingWriting />
        <StudentWorksheet />
      </Box>
    </>
  );
}

export default Rightbar;
