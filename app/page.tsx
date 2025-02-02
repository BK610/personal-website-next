import Home from "@/components/pageContent/HomePage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";

export default async function Page() {
  // Fetch data directly in a Server Component
  const sectionsList = await getSections();
  // Forward fetched data to your Client Component
  return <Home sectionsList={sectionsList} />;
}

async function getSections() {
  const sectionsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_HOME_DATA_URL ?? "fail"
  );

  return sectionsList;
}
