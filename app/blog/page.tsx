import BaseLayout from "@/components/BaseLayout";
import BlogPostPreview from "@/components/pageContent/blog/BlogPostPreview";
import SectionList from "@/components/SectionList";
import type LeafletRecord from "@/types/leaflet/LeafletRecord";
import { getLeafletPosts } from "@/utils/leaflet";
import { Key } from "react";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
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
        </SectionList>
      </div>
    </BaseLayout>
  );
}
