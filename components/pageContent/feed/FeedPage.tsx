"use client";

import type { Key } from "react";
import BaseLayout from "@/components/BaseLayout";
import BlueskyPost from "@/components/pageContent/feed/BlueskyFeed/BlueskyPost";

interface FeedProps {
  feed: Array<Object>;
}

export default function Feed({ feed }: FeedProps): React.ReactElement {
  return (
    <BaseLayout titleText={"Feed"}>
      <div className="max-w-2xl mx-auto">
        <h1>My Bluesky Feed</h1>
        <p className="unerline text-stone-700 dark:text-stone-300 text-sm">
          <a
            className="hover:opacity-70"
            href="https://bsky.app/profile/baileykane.co"
            target="_blank"
          >
            View my profile.
          </a>
        </p>
        <div className="col-span-2 sm:col-span-1">
          {feed.map((post_data, k: Key) => (
            <BlueskyPost post_data={post_data} key={k} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
