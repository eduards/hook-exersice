import Head from "next/head";
import React from "react";
import styles from "./index.module.css";
import CityTable from "../components/CityTable";
import { useRouter } from "next/router";
import { getCityData, sortCityData } from "../data/cityData";

export default function Home() {
  const { query } = useRouter();
  const { orderByField } = query;
  const { headers, rows } = getCityData();

  if (typeof orderByField === "string") {
    const sortColIndex = headers.findIndex((h) => {
      // We want that both, correctly encoded URL params and incorrecly ones
      // (eg 100m+ instead of 100m%2B) are handled correctly. To achieve this,
      // we format the both values with URLSearchParams.
      const headerAsSearchParam = new URLSearchParams(
        "orderByField=" + h.toLowerCase()
      ).get("orderByField");
      const orderByFieldAsSearchParam = new URLSearchParams(
        "orderByField=" + orderByField.toLowerCase()
      ).get("orderByField");
      return orderByFieldAsSearchParam === headerAsSearchParam;
    });
    if (sortColIndex !== -1) {
      sortCityData(rows, sortColIndex);
    }
  }

  return (
    <div>
      <Head>
        <title>Cities</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Cities</h1>
        <CityTable headers={headers} rows={rows} />
      </main>
    </div>
  );
}
