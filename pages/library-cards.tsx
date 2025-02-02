import { Key, useEffect, useState } from "react";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import BaseLayout from "@/components/BaseLayout";
import SectionList from "@/components/SectionList";
import LibraryCardItem from "@/components/LibraryCardItem";
import type { GetStaticProps } from "next";
import type LibraryCard from "@/types/LibraryCard";

interface LibraryCardsProps {
  libraryCardsList: {
    data: Array<LibraryCard>;
  };
}

export default function LibraryCards({
  libraryCardsList,
}: LibraryCardsProps): React.ReactElement {
  const [allCards, setAllCards] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const setSelected = (element: React.ReactElement) => {
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
      <>
        {selectedCard && (
          <div className="fixed backdrop-blur-2xl transition inset-0 bg-black/50 z-40" />
        )}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1>Library Cards</h1>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>
              I collect library cards when I travel! Here's the current
              collection.
            </p>
            <p>
              <a
                href="https://everyday-reading.com/where-you-can-get-a-non-resident-library-card/"
                target="_blank"
              >
                Many libraries
              </a>{" "}
              offer library cards to non-residents for a fee, and sometimes for
              free. I visit libraries, sign up for cards if I can, and use them
              for ebook access when I go back home.
            </p>
            <p>
              <i>PS: You can drag the cards around, just for fun.</i>
            </p>
          </div>
          <SectionList className="grid grid-cols-1 md:grid-cols-2">
            {libraryCardsList.data
              .sort((a: LibraryCard, b: LibraryCard) => {
                // Sorting by date, newest --> oldest
                return Date.parse(b.acquiredDate) - Date.parse(a.acquiredDate);
              })
              .map((libraryCard: LibraryCard, k: Key) => (
                <LibraryCardItem
                  libraryCard={libraryCard}
                  key={k}
                  onClick={(event) => setSelected(event.currentTarget)}
                />
              ))}
          </SectionList>
        </div>
      </>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export const getStaticProps = (async () => {
  const libraryCardsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_LIBRARY_CARDS_DATA_URL
  );

  return {
    props: {
      libraryCardsList,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps;
