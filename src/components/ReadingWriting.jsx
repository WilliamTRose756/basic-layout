import {
  Typography,
  Box,
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormGroup,
  FormControlLabel,
  Switch,
  Card,
} from "@mui/material";

import { Container } from "@mui/system";

function ReadingWriting() {
  return (
    <Container>
      <Box>
        <Typography variant="h4">
          SLO ELA Grade 3 Reading and Writing
        </Typography>
        <Typography sx={{ maxWidth: "50%" }} variant="p">
          A finalized SLO requires that the Student Target Worksheet, Reflection
          Questions, Initial Conference, and Final Conference be completed.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Card flex={4} sx={{ maxWidth: "15%" }}>
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="SLO Instructions"
              labelPlacement="top"
            />
          </FormGroup>
        </Card>
      </Box>
    </Container>
  );
}

export default ReadingWriting;
