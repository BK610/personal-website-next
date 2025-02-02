import Project from "@/components/pageContent/projects/ProjectPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type ProjectType from "@/types/ProjectType";
import { Params } from "next/dist/server/request/params";

export const revalidate = 60;

export default async function Page({ params }): Promise<React.ReactElement> {
  const project = await getProject(params);

  return <Project project={project} />;
}

async function getProject(params: Params): Promise<ProjectType> {
  const { slug } = await params;

  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  // TODO: Pulling all data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct item to this component.
  // Followup: This might be irrelevant now that it's fetched server-side.
  const project = projectsList.data.find((project) => project.slug === slug);

  return project;
}

export async function generateStaticParams(): Promise<Array<any>> {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  return projectsList.data.map((project) => ({
    slug: project.slug,
  }));
}
