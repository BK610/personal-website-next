import Link from "next/link";
import SectionItem from "./SectionItem";

export default function ProjectSectionItem({ project }) {
  const { title, description, previewImage, date, emoji, slug } = project;

  const dateObj = new Date(date);

  return (
    <Link href={"/projects/" + slug} passHref>
      <SectionItem className="group transition hover:scale-105 cursor-pointer">
        <a
          className="grid grid-cols-4 divide-y divide-purple-300"
          href={"/projects/" + slug}
        >
          <div className="col-span-4 grid grid-cols-4">
            <div className="p-2 self-center col-span-3">
              <p className="mb-1 text-stone-700 dark:text-stone-200 font-light text-sm">
                From{" "}
                {dateObj.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="mb-1">{title}</h3>
              <p className="text-stone-700 dark:text-stone-100">
                {description}
              </p>
            </div>
            <div className="text-3xl justify-self-end self-center pr-3 group-hover:animate-spin">
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
        </a>
      </SectionItem>
    </Link>
  );
}
