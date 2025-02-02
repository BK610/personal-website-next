import Papa from "papaparse";
import type { ParseResult } from "papaparse";

/**Fetch the CSV data from the provided Google Sheets URL. */
async function getSheetsCSV(url: URL): Promise<string> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const csv = await response.text();
  return csv;
}

/**Parse the provided CSV data into an array of JSON objects. */
function parseCSV(csvData: string): ParseResult<string> {
  return Papa.parse(csvData, { header: true });
}

/**Convenience function to fetch CSV data from the provided Google Sheets URL
 * and parse it into an array of JSON objects, all in one.
 *
 * Combines getSheetsCSV and parseCSV.
 */
export async function importCSVDataAsJson(
  url: string
): Promise<ParseResult<string>> {
  const urlObj = new URL(url);

  const csv = await getSheetsCSV(urlObj);
  const json = parseCSV(csv);
  return json;
}
