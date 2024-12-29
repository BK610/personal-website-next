import BaseLayout from "../components/BaseLayout";
import PageHeading from "../components/PageHeading";
import { agent } from "../lib/bskyApi";

export default function Feed({ feed }) {
  return (
    <BaseLayout titleText={"Feed"}>
      <div>
        <PageHeading>My Bluesky Feed</PageHeading>
        <div className="col-span-2 sm:col-span-1">
          {feed.map((post_data) => (
            <div className="border border-stone-800 dark:border-stone-200 rounded-lg p-4 my-4">
              <h2>
                Posted by{" "}
                <a
                  className="text-blue-600 hover:text-blue-500"
                  href={
                    "https://bsky.app/profile/" + post_data.post.author.handle
                  }
                  target="_blank"
                >
                  {post_data.post.author.handle}
                </a>{" "}
                at {post_data.post.record.createdAt}
              </h2>
              <br />
              <p>{post_data.post.record.text}</p>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const did = await fetch(
    "https://bsky.social/xrpc/com.atproto.identity.resolveHandle?handle=baileykane.co"
  )
    .then((res) => res.json())
    .then((json) => json.did);

  const posts = await agent.getAuthorFeed({
    actor: did,
  });

  const feed = posts.data.feed;

  return {
    props: { feed: JSON.parse(JSON.stringify(feed)) },
  };
}
