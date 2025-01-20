import { useEffect, useState } from "react";
import { importCSVDataAsJson } from "../lib/sheetsConnector";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";
import LibraryCard from "../components/LibraryCard";

export default function LibraryCards({ libraryCardsList }) {
  const [allCards, setAllCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function setSelected(element) {
    if (selectedCard == element) {
      setSelectedCard(null);
    } else {
      setSelectedCard(element);
    }
  }

  useEffect(() => {
    // console.log("STARTING");
    // console.log("selected:", selectedCard);
    // console.log("all:", allCards);
    // console.log("librarycardlist:", libraryCardsList);

    function rotateElement(event) {
      if (!selectedCard) return;

      const x = event.clientX;
      const y = event.clientY;

      var rect = selectedCard.getBoundingClientRect();
      const middleX = (rect.left + rect.right) / 2;
      const middleY = (rect.top + rect.bottom) / 2;

      // Optional: Use this to only move the card if mouse is near the card
      // if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      //   selectedCard.style.setProperty("--rotateX", "0deg");
      //   selectedCard.style.setProperty("--rotateY", "0deg");
      //   return;
      // }

      const offsetX = ((x - middleX) / middleX) * 60;
      const offsetY = ((y - middleY) / middleY) * 60;

      selectedCard.style.setProperty("--rotateX", -1 * offsetY + "deg");
      selectedCard.style.setProperty("--rotateY", -1 * offsetX + "deg");
    }

    setAllCards(document.querySelectorAll(".library-card"));

    if (allCards) {
      allCards.forEach((element) => {
        console.log("Removing event listener for:", element);
        element.style.setProperty("--rotateX", "0deg");
        element.style.setProperty("--rotateY", "0deg");
        element.classList.remove("library-card-selected");
        // element.removeEventListener("touchmove", rotateElement);
      });
    }

    document.removeEventListener("mousemove", rotateElement);

    if (selectedCard) {
      document.addEventListener("mousemove", rotateElement);
      // selectedCard.addEventListener("touchmove", rotateElement);
      selectedCard.classList.add("library-card-selected");
    }

    // console.log("ENDING");
    // console.log("selected:", selectedCard);
    // console.log("all:", allCards);

    // Ensures the event listener is removed when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", rotateElement);
      // if (selectedCard) {
      //   selectedCard.removeEventListener("touchmove", rotateElement);
      // }
    };
  }, [selectedCard, libraryCardsList]);

  return (
    <BaseLayout titleText={"Library Cards"}>
      <div className="max-w-4xl mx-auto space-y-4">
        <h1>Library Cards</h1>
        <div className="prose prose-stone dark:prose-invert">
          <p>I collect library cards. Here's the current collection.</p>
        </div>
        <button
          className={`${
            !selectedCard && "invisible"
          } p-2 rounded-lg border border-black dark:border-white`}
          onClick={() => setSelected(null)}
        >
          Deselect
        </button>
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
