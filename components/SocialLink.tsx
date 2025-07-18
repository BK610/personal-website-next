interface Props {
  href: string;
  target?: string;
  icon?: string;
  children: React.ReactNode;
}

export default function SocialLink({
  href,
  icon,
  target = "_blank",
  children,
}: Props): React.ReactElement {
  const iconURL = icon ? icon : new URL(href).origin + "/favicon.ico";

  return (
    <a
      href={href}
      target={target}
      className="p-2 rounded-full dark:text-white bg-stone-100 dark:bg-stone-700 hover:bg-stone-200 dark:hover:bg-stone-600 border border-stone-300 flex gap-1"
    >
      {children}
      <img className="h-6 w-6" src={iconURL} />
    </a>
  );
}
