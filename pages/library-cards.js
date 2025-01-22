import { useEffect, useState } from "react";
import { importCSVDataAsJson } from "../lib/sheetsConnector";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";
import LibraryCard from "../components/LibraryCard";

export default function LibraryCards({ libraryCardsList }) {
  const [allCards, setAllCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const setSelected = (element) => {
    if (selectedCard == element) {
      setSelectedCard(null);
    } else {
      setSelectedCard(element);
    }
  };

  useEffect(() => {
    setAllCards(document.querySelectorAll(".library-card"));

    if (allCards) {
      allCards.forEach((element) => {
        element.classList.remove("library-card-selected");
      });
    }

    if (selectedCard) {
      selectedCard.classList.add("library-card-selected");
    }
  }, [selectedCard, libraryCardsList]);

  return (
    <BaseLayout titleText={"Library Cards"}>
      {selectedCard && (
        <div className="fixed backdrop-blur-2xl transition inset-0 bg-black/50 z-40" />
      )}
      <div className="max-w-4xl mx-auto space-y-4">
        <h1>Library Cards</h1>
        <div className="prose prose-stone dark:prose-invert">
          <p>
            I collect library cards when I travel! Here's the current
            collection.
          </p>
        </div>
        <SectionList className="grid grid-cols-1 md:grid-cols-2">
          {libraryCardsList.data
            .sort((a, b) => {
              // Sorting by date, newest --> oldest
              return Date.parse(b.acquiredDate) - Date.parse(a.acquiredDate);
            })
            .map((libraryCard, k) => (
              <LibraryCard
                libraryCard={libraryCard}
                key={k}
                onClick={(event) => setSelected(event.currentTarget)}
              />
            ))}
        </SectionList>
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps() {
  const libraryCardsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_LIBRARY_CARDS_DATA_URL
  );

  return {
    props: {
      libraryCardsList,
    },
    revalidate: 60,
  };
}
