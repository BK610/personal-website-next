import BlogPost from "@/types/BlogPost";
import Link from "next/link";
import React from "react";

interface BlogPostPreviewProps {
  blogPost: BlogPost;
}

export default function BlogPostPreview({
  blogPost,
}: BlogPostPreviewProps): React.ReactElement {
  return (
    <Link href={blogPost.slug}>
      <div
        className={`section-item border-stone-800 dark:border-stone-200 group transition hover:scale-105 p-2 cursor-pointer`}
      >
        <div className="">
          <p className="text-sm mb-2 text-stone-700 dark:text-stone-100">
            From {blogPost.publishedDate}
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
