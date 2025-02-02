import BaseLayout from "@/components/BaseLayout";
import Head from "next/head";
import MusicItem from "@/components/MusicItem";
import type Music from "@/types/MusicItem";
import type { Key } from "react";

interface MusicProps {
  musicList: {
    data: Array<Music>;
  };
}

export default function Music({ musicList }: MusicProps): React.ReactElement {
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
            <h2>Music</h2>
            <div className="text-lg">Small moments of making music</div>
            {musicList.data.map((musicItem: Music, k: Key) => (
              <MusicItem musicItem={musicItem} key={k} />
            ))}
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
