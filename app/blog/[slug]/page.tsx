import BlogPost from "@/components/pageContent/blog/BlogPostPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type BlogPostType from "@/types/BlogPost";
import { Params } from "next/dist/server/request/params";

export const revalidate = 60;

export default async function Page({ params }): Promise<React.ReactElement> {
  const blogPost = await getBlogPost(params);

  return <BlogPost blogPost={blogPost} />;
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
