import { micromark } from "micromark";

export default function ProjectContent({ project }) {
  const { title, longDescription, image, imageAltText, date, markdown, link } =
    project;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const longDescriptionHtml = micromark(longDescription);
  const markdownHtml = micromark(markdown);

  return (
    <>
      <div className="w-full pb-2 border-b border-b-stone-500">
        <div className="text-sm text-stone-500 dark:text-stone-400">
          From {formattedDate}
        </div>
        <h1 className="mt-4">{title}</h1>
        {image && <img src={image} className="rounded-lg" alt={imageAltText} />}
        <a href={link} target="_blank">
          <button
            className="mt-2 px-4 py-2
              bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
              border border-stone-800 rounded-lg hover:opacity-80 active:opacity-60"
          >
            Visit →
          </button>
        </a>
        <p
          className="mt-6 prose prose-stone dark:prose-invert leading-relaxed"
          dangerouslySetInnerHTML={{ __html: longDescriptionHtml }}
        />
      </div>
      <div
        className="mt-4 prose prose-stone dark:prose-invert leading-relaxed"
        dangerouslySetInnerHTML={{ __html: markdownHtml }}
      />
    </>
  );
}
