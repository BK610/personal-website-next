import BlogPage from "@/components/pageContent/blog/BlogPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPostType from "@/types/BlogPost";

export default async function Page(): Promise<React.ReactElement> {
  const blogPosts = await getBlogPosts();

  return <BlogPage blogPosts={blogPosts} />;
}

async function getBlogPosts(): Promise<Array<BlogPostType>> {
  const blogPosts = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL || "undefined"
  );

  return blogPosts.data;
}
