import { micromark } from "micromark";

export default function ProjectContent({ project }) {
  const { title, longDescription, date, markdown, link } = project;

  const dateObj = new Date(date);

  const longDescriptionHtml = micromark(longDescription);
  const markdownHtml = micromark(markdown);

  return (
    <>
      <div className="w-full pb-2 border-b border-b-stone-500">
        <div className="text-stone-500 dark:text-stone-400">
          From{" "}
          {dateObj.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <h1 className="mt-4">{title}</h1>
        <a href={link} target="_blank">
          <button
            className="mt-4 px-4 py-2
              bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
              border border-stone-800 rounded-lg hover:opacity-80 active:opacity-60"
          >
            Visit →
          </button>
        </a>
        <p
          className="mt-2 prose prose-stone dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: longDescriptionHtml }}
        />
      </div>
      <div
        className="prose prose-stone dark:prose-invert mt-4"
        dangerouslySetInnerHTML={{ __html: markdownHtml }}
      ></div>
    </>
  );
}
