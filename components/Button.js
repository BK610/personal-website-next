export default function Button({ href, target = "_blank", className }) {
  return (
    <a href={href} target={target}>
      <button
        className={`px-4 py-2 font-bold
          bg-gradient-to-r from-purple-200 to-orange-100 dark:from-purple-500 dark:to-orange-300
          border border-stone-800 dark:border-stone-200 rounded-full hover:opacity-80 active:opacity-60 ${className}`}
      >
        Visit →
      </button>
    </a>
  );
}
