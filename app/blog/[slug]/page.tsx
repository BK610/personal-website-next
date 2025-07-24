import BaseLayout from "@/components/BaseLayout";
import BlogPostContent from "@/components/pageContent/blog/BlogPostContent";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPostType from "@/types/BlogPost";
import { Params } from "next/dist/server/request/params";

export const revalidate = 60;

export default async function Page({ params }): Promise<React.ReactElement> {
  // const blogPost = await getBlogPost(params);

  const title = "Test";
  const description = "My blog post";
  const publishedDate = "2025-01-01T00:00:00-05:00";

  return (
    <BaseLayout titleText={`Blog | ${title}`}>
      <div className="max-w-3xl mx-auto">
        <BlogPostContent
          title={title}
          description={description}
          publishedDate={publishedDate}
        />
      </div>
    </BaseLayout>
  );
}

async function getBlogPost(params: Params): Promise<BlogPostType> {
  const { slug } = await params;

  const blogPostsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL
  );

  // TODO: Pulling all data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct item to this component.
  // Followup: This might be irrelevant now that it's fetched server-side.
  const blogPost = blogPostsList.data.find(
    (blogPost) => blogPost.slug === slug
  );

  return blogPost;
}

export async function generateStaticParams(): Promise<Array<any>> {
  const blogPostsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_BLOG_POST_URL
  );

  return blogPostsList.data.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}
