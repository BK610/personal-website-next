import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";

export default function LibraryCards() {
  const [allCards, setAllCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function setSelected(element) {
    setSelectedCard(element);
    if (element) {
      element.classList.add("library-card-selected");
    }
  }

  useEffect(() => {
    // console.log("STARTING");
    // console.log("selected:", selectedCard);
    // console.log("all:", allCards);

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

    allCards.forEach((element) => {
      console.log("Removing event listener for:", element);
      element.style.setProperty("--rotateX", "0deg");
      element.style.setProperty("--rotateY", "0deg");
      element.classList.remove("library-card-selected");
    });

    document.removeEventListener("mousemove", rotateElement);

    if (selectedCard) {
      document.addEventListener("mousemove", rotateElement);
    }

    // console.log("ENDING");
    // console.log("selected:", selectedCard);
    // console.log("all:", allCards);

    // Ensures the event listener is removed when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", rotateElement);
    };
  }, [selectedCard]);

  return (
    <BaseLayout>
      <div className="max-w-2xl mx-auto space-y-4">
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
        <SectionList>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-stone-800 dark:border-stone-200">
            <div
              onClick={(event) => setSelected(event.currentTarget)}
              className="library-card rounded-lg cursor-pointer
                border-2 border-purple-200 active:border-purple-300 dark:border-purple-300 active:dark:border-purple-100
                shadow-md hover:shadow-lg"
            >
              <div className="text-center h-40 content-center">
                LIBRARY CARD IMAGE
              </div>
            </div>
            <div>
              <ul className="list-disc list-inside">
                <li>Library system:</li>
                <li>Library branch:</li>
                <li>Acquired:</li>
              </ul>
            </div>
          </div>
        </SectionList>
      </div>
    </BaseLayout>
  );
}
