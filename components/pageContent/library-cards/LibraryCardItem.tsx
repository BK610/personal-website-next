import type LibraryCard from "@/types/LibraryCard";
import Button from "@/components/Button";
import DragToRotateElement from "@/components/effects/DragToRotateElement";
import FlashlightEffect from "@/components/effects/FlashlightEffect";

interface LibraryCardProps {
  libraryCard: LibraryCard;
  onClick: (arg: any) => void;
}

export default function LibraryCardItem({
  libraryCard,
  onClick,
}: LibraryCardProps): React.ReactElement {
  const { name, link, branch, acquiredDate, imagePath } =
    libraryCard as LibraryCard;

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
        <div className="library-card mx-auto w-fit" onClick={onClick}>
          <DragToRotateElement>
            {/* <FlashlightEffect> */}
            <div
              className="rounded-lg cursor-pointer h-fit
            border-2 border-purple-200 hover:border-purple-300 dark:border-purple-400 hover:dark:border-purple-500
            shadow-md hover:shadow-xl"
            >
              <img
                className="object-scale-down h-fit max-h-72 rounded-md m-auto"
                src={imagePath}
                alt={"Library card from " + name}
              />
            </div>
            {/* </FlashlightEffect> */}
          </DragToRotateElement>
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
