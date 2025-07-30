import { micromark } from "micromark";
import BlogPostType from "@/types/BlogPost";

interface BlogPostContentProps {
  title: string;
  description: string;
  publishedDate: string;
  content?: string;
}

export default function BlogPostContent({
  title,
  description,
  content,
  publishedDate,
}: BlogPostContentProps): React.ReactElement {
  const formattedPublishedDate = new Date(publishedDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  // const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString(
  //   "en-US",
  //   {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   }
  // );

  const markdownContent = micromark(content || "Coming soon.");

  return (
    <div>
      <p className="text-sm text-stone-500 dark:text-stone-400">
        Published on {formattedPublishedDate}
      </p>
      <h1 className="mt-4">{title}</h1>
      <p className="mt-2 italic text-sm text-stone-600 dark:text-stone-300">
        {description}
      </p>
      <div
        className="mt-4 w-full max-w-none prose prose-stone dark:prose-invert leading-relaxed"
        dangerouslySetInnerHTML={{ __html: markdownContent }}
      />
    </div>
  );
}
