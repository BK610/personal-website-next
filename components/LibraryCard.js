export default function LibraryCard({ libraryCard, onClick }) {
  const { name, system, link, branch, acquiredDate } = libraryCard;

  const formattedDate = new Date(acquiredDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-4 grid gap-4 rounded-lg border border-stone-800 dark:border-stone-200">
      <div
        onClick={onClick}
        className="library-card rounded-lg cursor-pointer
                border-2 border-purple-200 active:border-purple-300 dark:border-purple-300 active:dark:border-purple-100
                shadow-md hover:shadow-lg"
      >
        <div className="text-center h-40 content-center">
          LIBRARY CARD IMAGE
        </div>
      </div>
      <a href={link} target="_blank">
        <div className="hover:underline">
          <h2>{name}</h2>
          <p className="text-stone-300 dark:text-stone-400">
            {branch}
            {" • "}
            Acquired {formattedDate}
          </p>
        </div>
      </a>
    </div>
  );
}
