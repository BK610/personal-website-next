import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";

export default function LibraryCards() {
  return (
    <BaseLayout>
      <div className="max-w-2xl mx-auto space-y-4">
        <h1>Library Cards</h1>
        <div className="prose prose-stone dark:prose-invert">
          <p>I collect library cards. Here's the current collection.</p>
        </div>
        <SectionList>
          <div className="p-2 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-stone-800 dark:border-stone-200">
            <div
              className="rounded-lg cursor-pointer
                border-2 border-purple-200 active:border-purple-300 dark:border-purple-300 active:dark:border-purple-100
                shadow-md hover:shadow-lg"
            >
              <div className="text-center h-40 content-center">
                LIBRARY CARD IMG
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
