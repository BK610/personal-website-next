import { micromark } from "micromark";
import BlogPostType from "@/types/BlogPost";

export default function BlogPostContent({ blogPost }): React.ReactElement {
  const { title, slug, content, publishedDate, updatedDate } =
    blogPost as BlogPostType;

  const formattedPublishedDate = new Date(publishedDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const markdownContent = micromark(content || "Coming soon.");

  return (
    <div
      className="mt-4 w-full max-w-none prose prose-stone dark:prose-invert leading-relaxed"
      dangerouslySetInnerHTML={{ __html: markdownContent }}
    />
  );
}
