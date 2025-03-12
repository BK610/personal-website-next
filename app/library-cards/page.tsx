import LibraryCards from "@/components/pageContent/library-cards/LibraryCardsPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type LibraryCard from "@/types/LibraryCard";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const libraryCards = await getLibraryCards();

  return <LibraryCards libraryCardsList={libraryCards} />;
}

async function getLibraryCards(): Promise<{
  data: Array<LibraryCard>;
}> {
  const libraryCardsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_LIBRARY_CARDS_DATA_URL || "undefined"
  );

  return libraryCardsList;
}
