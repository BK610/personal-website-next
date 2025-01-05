import BlueskyPostHeader from "./BlueskyPostHeader";
import BlueskyPostText from "./BlueskyPostText";

export default function BlueskyPost({ post_data }) {
  const { author, record } = post_data.post;

  // console.log(post_data);

  return (
    <a
      // href=""
      target="_blank"
    >
      <div className="border border-stone-800 dark:border-stone-200 rounded-lg p-4 my-4">
        <BlueskyPostHeader author={author} record={record} />
        <BlueskyPostText text={record.text} />
      </div>
    </a>
  );
}
