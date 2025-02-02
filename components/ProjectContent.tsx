import { micromark } from "micromark";
import Button from "./Button";
import type Project from "@/types/Project";

export default function ProjectContent({ project }): React.ReactElement {
  const {
    title,
    longDescription,
    image,
    imageAltText,
    date,
    markdown,
    link,
    githubLink,
  } = project as Project;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const longDescriptionHtml = micromark(longDescription || "Coming soon");
  const markdownHtml = micromark(markdown || "Coming soon");

  return (
    <div>
      <div className="w-full pb-2 border-b border-b-stone-500">
        <p className="w-full text-sm text-stone-500 dark:text-stone-400">
          From {formattedDate}
        </p>
        <h1 className="mt-4 font-bold">{title}</h1>
        {image && <img src={image} className="rounded-lg" alt={imageAltText} />}
        <div className="mt-2 space-x-2">
          <Button href={link || ""} />
          {githubLink && (
            <a href={githubLink} target="_blank">
              <button
                className="px-4 py-2
          bg-gradient-to-r from-stone-100 to-stone-200 dark:from-stone-900 dark:to-stone-800
          border border-stone-800 dark:border-stone-200 rounded-full hover:opacity-70"
              >
                View the code
                <img
                  className="dark:invert ml-2 inline"
                  src={"https://github.com/favicon.ico"}
                  width={22}
                  alt="GitHub logo"
                />
              </button>
            </a>
          )}
        </div>
        <p
          className="mt-6 w-full max-w-none prose prose-stone dark:prose-invert leading-relaxed"
          dangerouslySetInnerHTML={{ __html: longDescriptionHtml }}
        />
      </div>
      <div className="max-w-full">
        <div
          className="mt-4 w-full max-w-none prose prose-stone dark:prose-invert leading-relaxed"
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />
      </div>
    </div>
  );
}
