import { Component } from "react";
import BaseLayout from "../components/BaseLayout";
import PageHeading from "../components/PageHeading";
import Link from "next/link";

import { AtpAgent } from "@atproto/api";
import { OathClient } from "@atproto/oauth-client";

const agent = new AtpAgent({ service: "https://baileykane.co" });

export default class Feed extends Component {
  render() {
    return (
      <BaseLayout titleText={"Feed"}>
        <div>
          <PageHeading>Feed</PageHeading>
          <div className="col-span-2 sm:col-span-1 prose dark:prose-invert"></div>
        </div>
      </BaseLayout>
    );
  }
}
