import BlueskyPostText from "./BlueskyPostText";

export default function BlueskyPost({ post_data }) {
  const { author, record } = post_data.post;

  return (
    <div className="border border-stone-800 dark:border-stone-200 rounded-lg p-4 my-4">
      <h2>
        Posted by{" "}
        <a
          className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
          href={"https://bsky.app/profile/" + author.handle}
          target="_blank"
        >
          {author.handle}
        </a>{" "}
        at {record.createdAt}
      </h2>
      <br />
      <BlueskyPostText text={record.text} />
    </div>
  );
}
