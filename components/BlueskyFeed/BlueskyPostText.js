import { RichText } from "@atproto/api";
import { agent } from "../../lib/bskyApi";
import { marked } from "marked";

export default function BlueskyPostText({ text }) {
  const parsedText = parseBlueskyPostText(text);

  return (
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: parsedText }}
    ></div>
  );
}

function parseBlueskyPostText(text) {
  const rt = new RichText({ text: text });

  rt.detectFacets(agent);

  const markdown = renderAsMarkdown(rt);

  const parsedMarkdown = parseMarkdown(markdown);

  return parsedMarkdown;
}

function renderAsMarkdown(richText) {
  let markdown = "";
  for (const segment of richText.segments()) {
    if (segment.isLink()) {
      markdown += `[${segment.text}](${segment.link?.uri})`;
    } else if (segment.isMention()) {
      markdown += `[${segment.text}](https://bsky.app/profile/${segment.mention?.did})`;
    } else {
      markdown += segment.text;
    }
  }

  return markdown;
}

function parseMarkdown(markdown) {
  return marked.parse(markdown);
}
