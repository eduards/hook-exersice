import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import Link from "next/link";

type Props = {
  headers: string[];
  rows: string[][];
};

const CityTable = ({ headers, rows }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="city table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>
                <Link href={"/?orderByField=" + encodeURIComponent(header)}>
                  <a>{header}</a>
                </Link>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.toString()}>
              {row.map((cell, i) => (
                <TableCell key={i} component="th" scope="row">
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CityTable;
