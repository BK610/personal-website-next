import { Key } from "react";
import BaseLayout from "@/components/BaseLayout";
import BlogPostPreview from "@/components/BlogPostPreview";
import type BlogPost from "@/types/BlogPost";

interface BlogProps {
  blogPosts: Array<BlogPost>;
}

export default function Blog({ blogPosts }: BlogProps): React.ReactElement {
  return (
    <BaseLayout titleText="Blog">
      <div className="max-w-2xl mx-auto">
        <div>
          <h1>Blog</h1>
          <p className="pt-2">
            Collected thoughts, very much a work in progress.
          </p>
        </div>
        <div>
          {blogPosts.map((blogPost, k: Key) => (
            <BlogPostPreview key={k} blogPost={blogPost} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
