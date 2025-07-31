import BaseLayout from "@/components/BaseLayout";
import BlogPostContent from "@/components/pageContent/blog/BlogPostContent";
import { getLeafletPosts } from "@/utils/leaflet";
import { Params } from "next/dist/server/request/params";
import type LeafletRecord from "@/types/leaflet/LeafletRecord";

export const revalidate = 60;

export default async function Page({ params }): Promise<React.ReactElement> {
  const blogPost = await getBlogPost(params);

  const id = blogPost.uri.slice(blogPost.uri.lastIndexOf("/") + 1);

  return (
    <BaseLayout titleText={`Blog | ${blogPost.value.title}`}>
      <div className="max-w-3xl mx-auto">
        <div className="w-full max-w-none prose prose-stone dark:prose-invert text-sm text-center px-2 py-1 mb-4 bg-stone-200 dark:bg-stone-800 border-2 border-stone-300 dark:border-stone-700 rounded-md">
          Written and hosted on{" "}
          <a href="https://about.leaflet.pub/" target="_blank">
            Leaflet
          </a>
          , an{" "}
          <a href="https://atproto.com/" target="_blank">
            AT Protocol
          </a>
          -based blogging platform (
          <span>
            <a href={`https://baileykane.leaflet.pub/${id}`} target="_blank">
              view the original
            </a>
            )
          </span>
          .
        </div>
        <BlogPostContent
          id={id}
          title={blogPost.value.title}
          pages={blogPost.value.pages}
          description={blogPost.value.description}
          publishedAt={blogPost.value.publishedAt}
        />
      </div>
    </BaseLayout>
  );
}

async function getBlogPost(params: Params): Promise<LeafletRecord> {
  const { slug } = await params;

  const blogPosts: Array<LeafletRecord> = await getLeafletPosts();

  // TODO: Pulling all data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct item to this component.
  // Followup: This might be irrelevant now that it's fetched server-side.
  const blogPost = blogPosts.find(
    (blogPost) =>
      blogPost.value.title
        .replaceAll(" ", "-")
        .replaceAll("'", "")
        .replaceAll(".", "")
        .toLowerCase() === slug
  );

  return blogPost;
}

export async function generateStaticParams(): Promise<Array<any>> {
  const blogPosts: Array<LeafletRecord> = await getLeafletPosts();

  return blogPosts.map((blogPost) => ({
    slug: blogPost.value.title
      .replaceAll(" ", "-")
      .replaceAll("'", "")
      .replaceAll(".", "")
      .toLowerCase(),
  }));
}
