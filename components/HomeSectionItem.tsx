import Link from "next/link";

interface HomeSectionItemProps {
  link: string;
  name: string;
  description: string;
  emoji: string;
  className: string;
}

export default function HomeSectionItem({
  link,
  name,
  description,
  emoji,
  className,
}: HomeSectionItemProps): React.ReactElement {
  return (
    <Link href={link} passHref>
      <div
        className={`${className} section-item border-stone-800 dark:border-stone-200 group transition hover:scale-105 p-2 cursor-pointer grid grid-cols-4`}
      >
        <div className="self-center col-span-3">
          <h3 className="mb-1 font-bold">{name}</h3>
          <p className="text-stone-700 dark:text-stone-100">{description}</p>
        </div>
        <div className="text-3xl justify-self-end self-center pr-3">
          {emoji}
        </div>
      </div>
    </Link>
  );
}
