import BlogPage from "@/components/pageContent/BlogPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPost from "@/types/BlogPost";

export default async function Page(): Promise<React.ReactElement> {
  const blogPosts = await getBlogPosts();

  return <BlogPage blogPosts={blogPosts} />;
}

async function getBlogPosts(): Promise<Array<BlogPost>> {
  const blogPosts = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL || "undefined"
  );

  return blogPosts.data;
}
