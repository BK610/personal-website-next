import BaseLayout from "../../components/BaseLayout";
import MissingContent from "../../components/MissingContent";
import ProjectContent from "../../components/ProjectContent";
import { importCSVDataAsJson } from "../../lib/sheetsConnector";

export default function Project({ project }) {
  if (!project) {
    return <MissingContent />;
  }

  return (
    <BaseLayout>
      <ProjectContent project={project} />
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps(context) {
  const { slug } = context.params;

  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  // TODO: Pulling all data just to search for the one that matches the slug is inefficient.
  //   Consider pulling these once, elsewhere, and passing the correct item to this component.
  // Followup: This might be irrelevant now that I'm using getStaticProps to fetch the data server-side.
  const project = projectsList.data.find((project) => project.slug === slug);

  return { props: { project }, revalidate: 60 };
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths
export async function getStaticPaths() {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  const paths = projectsList.data.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}
