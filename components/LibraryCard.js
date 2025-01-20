export default function LibraryCard({ libraryCard, onClick }) {
  const { name, system, link, branch, acquiredDate, imagePath } = libraryCard;

  const formattedDate = new Date(acquiredDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-4 grid gap-4 rounded-lg border border-stone-700 dark:border-stone-300 bg-stone-200 dark:bg-stone-800 shadow-md">
      {imagePath && (
        <div
          onClick={onClick}
          className="library-card rounded-lg cursor-pointer min-h-fit max-h-60 min-w-fit mx-auto
                border-2 border-purple-200 active:border-purple-300 dark:border-purple-300 active:dark:border-purple-100
                shadow-md hover:shadow-lg"
        >
          <img
            className="object-scale-down rounded-md m-auto"
            src={imagePath}
          />
        </div>
      )}
      <a href={link} target="_blank">
        <div className="hover:underline">
          <h2>{name}</h2>
          <p className="text-stone-600 dark:text-stone-400">
            {branch}
            {" • "}
            Acquired {formattedDate}
          </p>
        </div>
      </a>
    </div>
  );
}
