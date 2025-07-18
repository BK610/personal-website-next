"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";

// Unused. Found that I can just use "." as shorthand for going up one URL level... 🤦
// function getUpURL() {
//   // Retrieve current path using useRouter hook
//   const currentURL = useRouter().asPath;

//   // Use this regex pattern for extracting the URL before the last
//   const regex = /(.+\/).+\/*.*$/g;
//   const extractedURL = regex.exec(currentURL);

//   // Use either the extracted URL or just "/" if the redirect URL is to home
//   // Maybe can be removed by using a more clever regex solution
//   const upURL = extractedURL ? extractedURL[1] : "/";

//   return upURL;
// }

interface NavItemProps {
  link: string;
  title: string;
  icon?: string;
  animation?: string;
}

function NavItem({
  link,
  title,
  icon,
  animation,
}: NavItemProps): React.ReactElement {
  return (
    <Link href={link}>
      <div
        className="w-fit inline-block group transition p-1 cursor-pointer
    border border-solid border-transparent rounded-lg hover:border-stone-800 dark:hover:border-stone-200"
      >
        {icon && (
          <span
            className={`mr-1 inline-block group-hover:animate-${animation}`}
          >
            {icon}
          </span>
        )}
        {title}
      </div>
    </Link>
  );
}

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps): React.ReactElement {
  const pathname = usePathname();
  var breadcrumbs = null;
  var navItems = null;

  if (pathname) {
    breadcrumbs = pathname.split("/");
    breadcrumbs = breadcrumbs.slice(1, breadcrumbs.length - 1);
  }

  if (breadcrumbs) {
    navItems = breadcrumbs.map((breadcrumb: string, k: Key) => (
      <>
        <span className="px-1 inline-block">/</span>
        <NavItem link="." title={breadcrumb} key={k} />
      </>
    ));
  }

  // Shorthand for going up one URL level: "."
  return (
    <nav
      className={
        pathname === "/"
          ? "invisible"
          : `${className} py-2 select-none font-light text-sm text-stone-800 dark:text-stone-200 border-b border-stone-800 dark:border-stone-200`
      }
    >
      <NavItem link="/" title="home" icon="🏠" animation="wigglelg" />
      {navItems || null}
    </nav>
  );
}
