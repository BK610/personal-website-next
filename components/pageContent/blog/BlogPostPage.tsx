import BaseLayout from "@/components/BaseLayout";
import BlogPostContent from "@/components/pageContent/blog/BlogPostContent";
import type BlogPostType from "@/types/BlogPost";

interface BlogPostProps {
  blogPost: BlogPostType;
}

export default function BlogPost({
  blogPost,
}: BlogPostProps): React.ReactElement {
  return (
    <BaseLayout titleText={`Blog | ${blogPost.title}`}>
      <div className="max-w-3xl mx-auto">
        <BlogPostContent blogPost={blogPost} />
      </div>
    </BaseLayout>
  );
}
