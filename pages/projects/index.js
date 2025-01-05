import HomeSectionItem from "../../components/HomeSectionItem";
import BaseLayout from "../../components/BaseLayout";
import SectionList from "../../components/SectionList";
import PageHeading from "../../components/PageHeading";
import { importCSVDataAsJson } from "../../lib/sheetsConnector";

export default function Projects({ projectsList }) {
  return (
    <BaseLayout className="">
      <div className="w-full flex flex-col items-center relative z-10">
        <div className="h-full w-full max-w-md space-y-4">
          <PageHeading>Projects</PageHeading>
          <div className="prose prose-stone dark:prose-invert">
            Things I've worked on.
          </div>
          <SectionList>
            {projectsList.data.map((section, k) => (
              <HomeSectionItem
                link={"/projects/" + section.slug}
                name={section.title}
                description={section.description}
                icon={section.icon}
                key={k}
              />
            ))}
          </SectionList>
        </div>
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps() {
  const projectsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_PROJECTS_DATA_URL
  );

  return {
    props: {
      projectsList,
    },
    revalidate: 60,
  };
}