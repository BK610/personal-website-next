import { parseBlueskyPostText } from "@/lib/richText";

export default function BlueskyPostText({ text }) {
  const parsedText = parseBlueskyPostText(text);

  return (
    <div
      className="prose prose-stone dark:prose-invert leading-snug text-sm text-stone-900 dark:text-stone-200"
      dangerouslySetInnerHTML={{ __html: parsedText }}
    ></div>
  );
}
