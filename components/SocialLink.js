export default function SocialLink({ href, icon, children }) {
  const iconURL = icon ? icon : new URL(href).origin + "/favicon.ico";
  console.log("Social link for", href);
  console.log("icon", icon);
  console.log("iconUrl:", iconURL);

  return (
    <a
      href={href}
      className="p-2 rounded-full dark:text-white bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 hover:dark:bg-stone-600 border border-stone-300 flex gap-1"
    >
      {children}
      <img className="h-6 w-6" src={iconURL} />
    </a>
  );
}
