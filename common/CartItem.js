import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const CartItem = ({ items }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Product
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Price
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Booking Date
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Total
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={row.img} style={{ width: 100, height: 100 }} />
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">
                {row.bookingDate
                  .map((date) => date.format("YYYY-MM-DD"))
                  .join(" - ")}
              </TableCell>
              <TableCell align="center">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
