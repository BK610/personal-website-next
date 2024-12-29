import HomeSectionItem from "../components/HomeSectionItem";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";
import PageHeading from "../components/PageHeading";
import { importCSVDataAsJson } from "../lib/sheetsConnector";

export default function Home({ sectionsList }) {
  return (
    <BaseLayout navbarVisible={false} className="">
      <div className="w-full flex flex-col relative -mt-4">
        <div className="w-full flex flex-col items-center absolute z-10 mt-4">
          <div className="h-full w-full max-w-md space-y-4">
            <PageHeading>Hello hello, this is Bailey speaking.</PageHeading>
            <div className="prose prose-stone dark:prose-invert">
              Welcome to the home of my many interests, half-baked projects, and
              digital representations of myself.
              <br />
              <br />
              Hope you enjoy.
            </div>
            <SectionList>
              {sectionsList.data.map((section, k) => (
                <HomeSectionItem
                  link={
                    section.link ? section.link : section.name.toLowerCase()
                  }
                  name={section.name}
                  description={section.description}
                  icon={section.icon}
                  key={k}
                />
              ))}
            </SectionList>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps() {
  const sectionsList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_HOME_DATA_URL
  );

  return {
    props: {
      sectionsList,
    },
  };
}
