import BaseLayout from "../components/BaseLayout";
import PageHeading from "../components/PageHeading";

import { AtpAgent } from "@atproto/api";
// import { OAuthClient } from "@atproto/oauth-client";

function Feed() {
  //   const agent = new AtpAgent({ service: "https://baileykane.co/feed" });
  // const oauthClient = new OAuthClient({});

  //   await agent.login({
  //     identifier: "baileykane.co",
  //     password: "kbw8fef2hfc3uyu-WVA",
  //   });

  return (
    <BaseLayout titleText={"Feed"}>
      <div>
        <PageHeading>Feed</PageHeading>
        <div className="col-span-2 sm:col-span-1 prose dark:prose-invert"></div>
      </div>
    </BaseLayout>
  );
}

export default Feed;
