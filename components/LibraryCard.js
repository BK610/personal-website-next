import Button from "./Button";

export default function LibraryCard({ libraryCard, onClick }) {
  const { name, link, branch, acquiredDate, imagePath } = libraryCard;

  const formattedDate = new Date(acquiredDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="p-4 grid gap-4 rounded-lg h-fit
    border border-stone-700 dark:border-stone-300 bg-stone-200 dark:bg-stone-800 shadow-md hover:shadow-lg"
    >
      {imagePath && (
        <div
          onClick={onClick}
          className="library-card rounded-lg cursor-pointer h-fit mx-auto
                border-2 border-purple-200 hover:border-purple-300 dark:border-purple-400 hover:dark:border-purple-500
                shadow-md hover:shadow-xl"
        >
          <img
            className="object-scale-down h-fit max-h-72 rounded-md m-auto"
            src={imagePath}
            alt={"Library card from " + name}
          />
        </div>
      )}
      <div>
        <h2>{name}</h2>
        <p className="text-stone-600 dark:text-stone-400">
          {branch}
          {" • "}
          Acquired {formattedDate}
        </p>
      </div>
      <Button
        href={link}
        className={"rounded-lg font-semibold w-full hover:shadow-lg"}
      />
    </div>
  );
}
