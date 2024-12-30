import BaseLayout from "../components/BaseLayout";
import Head from "next/head";
import MusicItem from "../components/MusicItem";
import PageHeading from "../components/PageHeading";
import { importCSVDataAsJson } from "../lib/sheetsConnector";

export default function Music({ musicList }) {
  return (
    <>
      <Head>
        {/* Makes all links on the page open in a new tab.
          From here: https://stackoverflow.com/a/5788445 */}
        <base target="_blank" />{" "}
      </Head>
      <BaseLayout titleText={"Music"}>
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-md space-y-4">
            <PageHeading>Music</PageHeading>
            <div className="text-lg">Small moments of making music</div>
            {musicList.data.map((musicItem, k) => (
              <MusicItem info={musicItem} key={k} />
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  );
}

// Reference: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#using-getstaticprops-to-fetch-data-from-a-cms
export async function getStaticProps() {
  const musicList = await importCSVDataAsJson(
    process.env.NEXT_PUBLIC_MUSIC_DATA_URL
  );

  return {
    props: {
      musicList,
    },
    revalidate: 60,
  };
}
