import Link from "next/link";
import SectionItem from "./SectionItem";

export default function HomeSectionItem({
  link,
  name,
  description,
  emoji,
  className,
}) {
  return (
    <Link href={link} passHref>
      <SectionItem
        className={`${className} border-stone-800 dark:border-stone-200 group transition hover:scale-105 p-2 cursor-pointer grid grid-cols-4`}
      >
        <div className="self-center col-span-3">
          <h3 className="mb-1 font-bold">{name}</h3>
          <p className="text-stone-700 dark:text-stone-100">{description}</p>
        </div>
        <div className="text-3xl justify-self-end self-center pr-3 group-hover:animate-spin">
          {emoji}
        </div>
      </SectionItem>
    </Link>
  );
}
