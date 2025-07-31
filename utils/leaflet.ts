import type LeafletRecord from "@/types/leaflet/LeafletRecord";

export async function getLeafletPosts(): Promise<Array<LeafletRecord>> {
  const leafletPosts = await fetch(
    "https://bsky.social/xrpc/com.atproto.repo.listRecords?repo=did:plc:4zwo7e6xbmv3clz7bj5wsxxu&collection=pub.leaflet.document"
  ).then((res) => res.json());

  return JSON.parse(JSON.stringify(leafletPosts.records));
}
