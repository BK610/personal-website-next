export default function BlueskyPostHeader({ author, record }) {
  return (
    <h2 className="text-stone-700 dark:text-stone-400 border-b border-stone-600 dark:border-stone-500 mb-2">
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
  );
}
