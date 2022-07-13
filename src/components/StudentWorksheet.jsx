import { Container } from "@mui/system";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Name", "metric", "metric", "metric", "metric"),
  createData("Name", "metric", "metric", "metric", "metric"),
  createData("Name", "metric", "metric", "metric", "metric"),
  createData("Name", "metric", "metric", "metric", "metric"),
  createData("Name", "metric", "metric", "metric", "metric"),
];

function studentWorksheet() {
  return (
    <Container>
      <h1>Student Target Worksheet</h1>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell align="right">Evaluation Metric</TableCell>
              <TableCell align="right">Evaluation Metric</TableCell>
              <TableCell align="right">Evaluation Metric</TableCell>
              <TableCell align="right">Evaluation Metric</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default studentWorksheet;
