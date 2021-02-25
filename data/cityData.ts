import csv from "../data/cities.csv";

const parseNumber = (num: string): number => {
  return parseInt(num.replace(/,/g, ""));
};

export const getCityData = (): {
  headers: string[];
  rows: string[][];
} => {
  const csvWithoutCarriageReturn = csv.map((row) =>
    row.map((cell) => cell.replace(/[\n\r]+/g, " "))
  );
  const headers = csvWithoutCarriageReturn[0];
  const rows = csvWithoutCarriageReturn.slice(1);
  return { headers, rows };
};

const compareCityData = (colIdx: number) => (
  a: string[],
  b: string[]
): number => {
  if (colIdx === 1 || colIdx === 2) {
    return a[colIdx].localeCompare(b[colIdx]);
  }
  return parseNumber(a[colIdx]) - parseNumber(b[colIdx]);
};

// Sorts city data inline using Array.prototype.sort
export const sortCityData = (rows: string[][], colIdx: number): string[][] => {
  return rows.sort(compareCityData(colIdx));
};
