import BaseLayout from "@/components/BaseLayout";
import MissingContent from "@/components/MissingContent";
import ProjectContent from "@/components/ProjectContent";
import { importCSVDataAsJson } from "@/lib/sheetsConnector";
import type Project from "@/types/Project";
import type { GetStaticProps, GetStaticPaths } from "next";

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps): React.ReactElement {
  if (!project) {
    return <MissingContent />;
  }

  return (
    <BaseLayout titleText={`Projects | ${project.title}`}>
      <div className="max-w-3xl mx-auto">
        <ProjectContent project={project} />
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export const getStaticProps = (async (context) => {
  const { slug } = context.params;

  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  // TODO: Pulling all data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct item to this component.
  // Followup: This might be irrelevant now that I'm using getStaticProps to fetch the data server-side.
  const project = projectsList.data.find((project) => project.slug === slug);

  return { props: { project }, revalidate: 60 };
}) satisfies GetStaticProps<ProjectProps>;

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
export const getStaticPaths = (async () => {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  const paths = projectsList.data.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;
