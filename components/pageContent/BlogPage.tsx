import { Key } from "react";
import BaseLayout from "@/components/BaseLayout";

interface BlogProps {
  blogPosts: Array<Object>;
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
            <div key={k}>{blogPost.name}</div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
