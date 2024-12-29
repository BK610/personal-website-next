import Papa from "papaparse";

/**Fetch the CSV data from the provided URL. */
export async function getSheetsCSV(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const csv = await response.text();
  return csv;
}

/**Parse the provided CSV data into an array of JSON objects. */
export function parseCSV(csvData) {
  return Papa.parse(csvData, { header: true });
}
