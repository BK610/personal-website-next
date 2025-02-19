import BlogPost from "@/types/BlogPost";
import React from "react";

interface BlogPostPreviewProps {
  blogPost: BlogPost;
}

export default function BlogPostPreview({
  blogPost,
}: BlogPostPreviewProps): React.ReactElement {
  return (
    <div>
      <h2>{blogPost.title}</h2>
    </div>
  );
}
