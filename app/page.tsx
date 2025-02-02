import Home from "@/components/pageContent/HomePage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type HomeSection from "@/types/home/HomeSection";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  // Fetch data directly in a Server Component
  const sectionsList = await getSections();
  // Forward fetched data to your Client Component
  return <Home sectionsList={sectionsList} />;
}

async function getSections(): Promise<{
  data: Array<HomeSection>;
}> {
  const sectionsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_HOME_DATA_URL || "undefined"
  );

  return sectionsList;
}
