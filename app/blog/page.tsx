import BaseLayout from "@/components/BaseLayout";
import BlogPostPreview from "@/components/pageContent/blog/BlogPostPreview";
import SectionList from "@/components/SectionList";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPostType from "@/types/BlogPost";
import type LeafletRecord from "@/types/LeafletRecord";
import { Key } from "react";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const blogPosts = await getBlogPosts();
  const leafletPosts: Array<LeafletRecord> = await getLeafletPosts();
  return (
    <BaseLayout titleText="Blog">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1>Blog</h1>
          <p className="pt-2">
            Collected thoughts, very much a work in progress.
          </p>
        </div>
        <SectionList className="flex flex-col item-list">
          {leafletPosts.map((leafletPost, k: Key) => (
            <BlogPostPreview
              key={k}
              title={leafletPost.value.title}
              description={leafletPost.value.description}
              publishedDate={leafletPost.value.publishedAt}
            />
          ))}

          {/* {blogPosts.map((blogPost, k: Key) => (
            <BlogPostPreview key={k} blogPost={blogPost} />
          ))} */}
        </SectionList>
      </div>
    </BaseLayout>
  );
}

async function getBlogPosts(): Promise<Array<BlogPostType>> {
  const blogPosts = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL || "undefined"
  );

  return blogPosts.data;
}

async function getLeafletPosts(): Promise<Array<LeafletRecord>> {
  const leafletPosts = await fetch(
    "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:4zwo7e6xbmv3clz7bj5wsxxu&collection=pub.leaflet.document"
  ).then((res) => res.json());

  return JSON.parse(JSON.stringify(leafletPosts.records));
}
