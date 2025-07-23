import { agent } from "@/lib/bskyApi";
import BlogPage from "@/components/pageContent/blog/BlogPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPostType from "@/types/BlogPost";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const blogPosts = await getBlogPosts();
  const leafletPosts = await getLeafletPosts();

  return <BlogPage blogPosts={blogPosts} />;
}

async function getBlogPosts(): Promise<Array<BlogPostType>> {
  const blogPosts = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL || "undefined"
  );

  return blogPosts.data;
}

async function getLeafletPosts(): Promise<Array<Object>> {
  const leafletPosts = await fetch(
    "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:4zwo7e6xbmv3clz7bj5wsxxu&collection=pub.leaflet.document"
  ).then((res) => res.json());

  return JSON.parse(JSON.stringify(leafletPosts.records));
}
