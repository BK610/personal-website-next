import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import Head from "next/head";
import MusicItem from "../components/MusicItem";
import PageHeading from "../components/PageHeading";

export default class Music extends Component {
  static async getInitialProps() {
    const musicList = await importMusic();
    return { musicList };
  }

  render() {
    const { musicList } = this.props;
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
              <div className="text-lg">Music I've been involved with</div>
              {musicList.map((music, k) => (
                <MusicItem info={music.attributes} key={k} />
              ))}
            </div>
          </div>
        </BaseLayout>
      </>
    );
  }
}

const importMusic = async () => {
  // From https://github.com/masives/netlifycms-nextjs/blob/master/pages/blog/index.js
  const markdownFiles = require
    .context("../content/music", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/music/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};
