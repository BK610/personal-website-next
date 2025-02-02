import Link from "next/link";
import type Project from "../types/Project";

interface ProjectSectionItemProps {
  project: Project;
}

export default function ProjectSectionItem({
  project,
}: ProjectSectionItemProps): React.ReactElement {
  const { title, description, previewImage, date, emoji, slug } =
    project as Project;

  const dateObj = new Date(date);

  return (
    <div>
      <Link href={"/projects/" + slug} passHref>
        <div className="section-item group transition hover:scale-105 cursor-pointer grid grid-cols-4 divide-y divide-stone-800 dark:divide-stone-200">
          <div className="col-span-4 grid grid-cols-4">
            <div className="p-2 self-center col-span-3">
              <p className="mb-1 text-stone-700 dark:text-stone-100 font-light text-sm">
                From{" "}
                {dateObj.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="mb-1 font-bold">{title}</h3>
              <p className="text-stone-700 dark:text-stone-100">
                {description}
              </p>
            </div>
            <div className="text-3xl justify-self-end self-center pr-3">
              {emoji}
            </div>
          </div>
          {previewImage && (
            <div className="col-span-4 h-fit aspect-video overflow-hidden">
              <img
                className="object-cover aspect-video rounded-b-lg"
                src={previewImage}
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
