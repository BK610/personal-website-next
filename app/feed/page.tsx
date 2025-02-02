import { agent } from "@/lib/bskyApi";
import Feed from "@/components/pageContent/FeedPage";

export const revalidate = 60;

export default async function Page(): Promise<React.ReactElement> {
  const feed = await getFeed();

  return <Feed feed={feed} />;
}

async function getFeed(): Promise<Array<Object>> {
  const did = await fetch(
    "https://bsky.social/xrpc/com.atproto.identity.resolveHandle?handle=baileykane.co"
  )
    .then((res) => res.json())
    .then((json) => json.did);

  const posts = await agent.getAuthorFeed({
    actor: did,
  });

  return JSON.parse(JSON.stringify(posts.data.feed));
}
