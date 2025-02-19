import BlogPage from "@/components/pageContent/BlogPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";

export default async function Page(): Promise<React.ReactElement> {
  const blogPosts = await getBlogPosts();

  return <BlogPage blogPosts={blogPosts} />;
}

async function getBlogPosts(): Promise<Array<Object>> {
  const blogPosts = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_LIBRARY_CARDS_DATA_URL || "undefined"
  );

  return blogPosts.data;
}
