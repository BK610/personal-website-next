import Link from "next/link";
import Image from "next/image";

interface Props {
  link: string;
  description: string;
  icon: string;
  name: string;
}

export default function RecipeSectionItem({
  link,
  description,
  icon,
  name,
}: Props): React.ReactElement {
  return (
    <Link href={link} passHref>
      <div
        className="section-item h-32 sm:h-96 w-full sm:flex sm:flex-col grid grid-cols-3
        group cursor-pointer transition hover:scale-105
        sm:divide-y divide-x sm:divide-x-0 divide-stone-800 dark:divide-stone-100
        overflow-hidden"
      >
        <div className="p-2 h-24 self-center content-center sm:self-start col-span-2">
          <h3 className="mb-1 font-semibold">{name}</h3>
          <p
            className="text-stone-800 dark:text-stone-100
              line-clamp-2"
          >
            {description}
          </p>
        </div>
        <div className="h-full overflow-hidden">
          <Image
            className="h-full w-full object-cover overflow-hidden"
            src={icon}
            width={"600"}
            height={"600"}
            alt={`Thumbnail of ${name}`}
          ></Image>
        </div>
      </div>
    </Link>
  );
}
