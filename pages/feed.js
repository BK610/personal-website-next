import BaseLayout from "../components/BaseLayout";
import BlueskyPost from "../components/BlueskyFeed/BlueskyPost";
import { agent } from "../lib/bskyApi";

export default function Feed({ feed }) {
  return (
    <BaseLayout titleText={"Feed"}>
      <div>
        <h1>My Bluesky Feed</h1>
        <div className="col-span-2 sm:col-span-1">
          {feed.map((post_data) => (
            <BlueskyPost post_data={post_data} />
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
    revalidate: 60,
  };
}
