import { RichText } from "@atproto/api";
import { agent } from "@/lib/bskyApi";
import { micromark } from "micromark";

export function parseBlueskyPostText(text) {
  const rt = new RichText({ text: text });

  rt.detectFacets(agent);

  const markdown = renderAsMarkdown(rt);

  const parsedMarkdown = micromark(markdown);

  return parsedMarkdown;
}

export function renderAsMarkdown(richText) {
  let markdown = "";
  for (const segment of richText.segments()) {
    if (segment.isLink()) {
      markdown += `[${segment.text}](${segment.link?.uri})`;
    } else if (segment.isMention()) {
      markdown += `[${segment.text}](https://bsky.app/profile/${segment.mention?.did})`;
    } else if (segment.isTag()) {
      markdown += `[${segment.text}](https://bsky.app/hashtag/${segment.tag?.tag})`;
    } else {
      markdown += segment.text;
    }
  }

  return markdown;
}
