import BlogPost from "@/types/BlogPost";
import Link from "next/link";
import React from "react";

interface BlogPostPreviewProps {
  blogPost: BlogPost;
}

export default function BlogPostPreview({
  blogPost,
}: BlogPostPreviewProps): React.ReactElement {
  const publishedDateObj = new Date(blogPost.publishedDate);

  return (
    <Link href={blogPost.slug}>
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
          <h2 className="mb-1 font-bold">{blogPost.title}</h2>
          <p className="text-stone-700 dark:text-stone-100 line-clamp-3">
            {blogPost.content}
          </p>
        </div>
      </div>
    </Link>
  );
}
