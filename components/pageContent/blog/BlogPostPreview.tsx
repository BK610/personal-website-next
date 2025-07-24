import Link from "next/link";
import React from "react";

interface BlogPostPreviewProps {
  title: string;
  description: string;
  publishedDate: string;
}

export default function BlogPostPreview({
  title,
  description,
  publishedDate,
}: BlogPostPreviewProps): React.ReactElement {
  const publishedDateObj = new Date(publishedDate);

  const slug = "";

  return (
    <Link href={"/blog/" + slug}>
      <div
        className={`section-item group transition hover:scale-105 p-2 cursor-pointer`}
      >
        <div>
          <p className="text-sm mb-2 text-stone-700 dark:text-stone-100">
            Published{" "}
            {publishedDateObj.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h2 className="mb-1 font-bold">{title}</h2>
          <p className="text-stone-700 dark:text-stone-100 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
