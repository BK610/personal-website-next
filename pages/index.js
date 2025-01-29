import HomeSectionItem from "../components/HomeSectionItem";
import BaseLayout from "../components/BaseLayout";
import SectionList from "../components/SectionList";
import { importCSVDataAsJson } from "../lib/sheetsConnector";
import Link from "next/link";

export default function Home({ sectionsList }) {
  return (
    <BaseLayout navbarVisible={false} className="">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h1 className="mb-2">Hello hello, this is Bailey speaking.</h1>
          <div className="prose prose-stone dark:prose-invert prose-a:no-underline">
            <p>
              I help small business owners{" "}
              <b>solve problems with technology,</b> so they can{" "}
              <b>reclaim their time</b> and{" "}
              <b>focus on the things that matter</b>. Contact me at{" "}
              <a href="mailto:bailey.orion.kane@gmail.com" target="_blank">
                <code className="underline">bailey.orion.kane@gmail.com</code>
              </a>
              .
            </p>
            <p>Some things I do:</p>
            <ul className="list-disc list-inside">
              <li>
                <b>Build websites</b> for marketing, portfolios, or other
                information
              </li>
              <li>
                <b>Create bespoke tools</b> and systems to work more efficiently
              </li>
              <li>
                <b>Connect systems</b> and tools together
              </li>
            </ul>
            <div className="mx-auto not-prose">
              <Link href={"/projects"} className="rounded-lg">
                <p
                  className="w-full text-center px-4 py-2 font-semibold text-stone-900 dark:text-white
          bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
          border border-stone-800 dark:border-stone-200 rounded-lg group transition hover:scale-105"
                >
                  Example projects →
                </p>
              </Link>
            </div>
            <p>
              I enjoy working with <b>small business owners and individuals</b>.
              Even more fun if they work in{" "}
              <span className="underline decoration-green-700 dark:decoration-green-400">
                climate
              </span>
              ,{" "}
              <span className="underline decoration-purple-700 dark:decoration-purple-400">
                arts
              </span>
              ,{" "}
              <span className="underline decoration-orange-600 dark:decoration-orange-400">
                music
              </span>
              , or{" "}
              <span className="underline decoration-blue-700 dark:decoration-blue-400">
                education
              </span>
              .
            </p>
            <p>
              If this sounds like you and you might have a project to work on
              together, or you just want to say hi, please get in touch.
            </p>
            <p>Talk to you soon 👋</p>
          </div>
        </div>
        <div className="py-6 px-2 sm:px-4 rounded-lg bg-stone-100 dark:bg-stone-800 w-full flex flex-col relative z-10">
          <h3 className="text-stone-600 dark:text-stone-400 mb-2 border-b border-b-stone-400 dark:border-b-stone-500">
            Please, take a gander
          </h3>
          <div className="h-full w-full items-center space-y-4">
            <SectionList className="item-list flex flex-col">
              {sectionsList.data.map((section, k) => (
                <HomeSectionItem
                  link={
                    section.link ? section.link : section.name.toLowerCase()
                  }
                  name={section.name}
                  description={section.description}
                  emoji={section.emoji}
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
    revalidate: 60,
  };
}
