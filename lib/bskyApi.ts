import { AtpAgent } from "@atproto/api";

export const agent: AtpAgent = new AtpAgent({
  // App View URL
  service: "https://api.bsky.app",
  // If you were making an authenticated client, you would
  // use the PDS URL here instead - the main one is bsky.social
  // service: "https://bsky.social",
});
