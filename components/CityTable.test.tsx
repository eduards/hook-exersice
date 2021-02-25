import CityTable from "./CityTable";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("CityTable", () => {
  test("table renders header and rows", () => {
    const headers = ["col1", "col2"];
    const rows = [
      ["3", "22"],
      ["1", "33"],
    ];

    render(<CityTable headers={headers} rows={rows} />);

    for (const header of headers) {
      expect(screen.getByText(header)).toBeInTheDocument();
    }
    for (const cols of rows) {
      for (const col of cols) {
        expect(screen.getByText(col)).toBeInTheDocument();
      }
    }
  });
});
