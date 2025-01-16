import { micromark } from "micromark";

export default function ProjectContent({ project }) {
  const {
    title,
    longDescription,
    image,
    imageAltText,
    date,
    markdown,
    link,
    githubLink,
  } = project;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const longDescriptionHtml = micromark(longDescription);
  const markdownHtml = micromark(markdown);

  return (
    <div>
      <div className="w-full pb-2 border-b border-b-stone-500">
        <p className="w-full text-sm text-stone-500 dark:text-stone-400">
          From {formattedDate}
        </p>
        <h1 className="mt-4 font-bold">{title}</h1>
        {image && <img src={image} className="rounded-lg" alt={imageAltText} />}
        <div className="mt-2 space-x-2">
          <a href={link} target="_blank">
            <button
              className="px-4 py-2 font-bold
              bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
              border border-stone-800 dark:border-stone-200 rounded-full hover:opacity-80 active:opacity-60"
            >
              Visit →
            </button>
          </a>
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
