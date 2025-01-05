export default function BlueskyPostHeader({ author, record }) {
  const dateObj = new Date(record.createdAt);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-US");

  return (
    <div className="text-sm text-stone-700 dark:text-stone-400 border-b border-stone-600 dark:border-stone-500 mb-2">
      By{" "}
      <a
        className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
        href={"https://bsky.app/profile/" + author.handle}
        target="_blank"
      >
        {author.handle}
      </a>{" "}
      at {formattedTime} on {formattedDate}
    </div>
  );
}
