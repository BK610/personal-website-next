import BlueskyPostHeader from "./BlueskyPostHeader";
import BlueskyPostText from "./BlueskyPostText";

export default function BlueskyPost({ post_data }) {
  const { author, record } = post_data.post;

  return (
    <div className="border border-stone-800 dark:border-stone-200 rounded-lg p-4 my-4">
      <BlueskyPostHeader author={author} record={record} />
      <BlueskyPostText text={record.text} />
    </div>
  );
}
