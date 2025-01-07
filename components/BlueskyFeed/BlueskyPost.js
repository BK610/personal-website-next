import BlueskyPostHeader from "./BlueskyPostHeader";
import BlueskyPostText from "./BlueskyPostText";

export default function BlueskyPost({ post_data }) {
  const { author, record, uri } = post_data.post;
  const blueskyUri = getBlueskyUri(author.handle, uri);

  return (
    <a href={blueskyUri} target="_blank">
      <div
        className="p-4 my-4 bg-stone-200 dark:bg-stone-800 rounded-lg
      border border-transparent border-b-stone-900 dark:border-b-stone-200 hover:border-stone-900 hover:dark:border-stone-200 "
      >
        <BlueskyPostHeader author={author} record={record} />
        <BlueskyPostText text={record.text} />
      </div>
    </a>
  );
}

function getBlueskyUri(handle, atProtoUri) {
  var blueskyUri = "https://bsky.app/profile/<handle>/post/<postId>";

  const postId = atProtoUri.substring(atProtoUri.lastIndexOf("/") + 1);

  blueskyUri = blueskyUri
    .replace("<handle>", handle)
    .replace("<postId>", postId);

  return blueskyUri;
}
