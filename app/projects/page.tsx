import Projects from "@/components/pageContent/projects/ProjectsPage";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type ProjectType from "@/types/ProjectType";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const projects = await getProjects();

  return <Projects projectsList={projects} />;
}

async function getProjects(): Promise<{
  data: Array<ProjectType>;
}> {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  return projectsList;
}
