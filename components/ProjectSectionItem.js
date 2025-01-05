import Link from "next/link";
import SectionItem from "./SectionItem";

export default function ProjectSectionItem({ project }) {
  const { title, description, date, emoji, slug } = project;

  const dateObj = new Date(date);

  return (
    <Link href={"/projects/" + slug} passHref>
      <SectionItem className="group transition hover:scale-105 p-2 cursor-pointer">
        <a className="grid grid-cols-2" href={"/projects/" + slug}>
          <div className="self-center">
            <p className="mb-1 text-stone-700 dark:text-stone-200 font-light text-sm">
              From{" "}
              {dateObj.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <h3 className="mb-1">{title}</h3>
            <p className="text-stone-700 dark:text-stone-100">{description}</p>
          </div>
          <div className="text-3xl justify-self-end self-center pr-3 group-hover:animate-spin">
            {emoji}
          </div>
        </a>
      </SectionItem>
    </Link>
  );
}
