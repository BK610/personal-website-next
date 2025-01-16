import Link from "next/link";
import { useRouter } from "next/router";

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

const NavItem = ({ link, title, icon, animation }) => {
  return (
    <Link href={link}>
      <div className="w-fit inline-block group transition ">
        <a
          href={link}
          className="p-1 cursor-pointer
    border border-solid border-transparent rounded-lg hover:border-stone-800 hover:dark:border-stone-200"
        >
          {icon && (
            <span
              className={`mr-1 inline-block group-hover:animate-${animation}`}
            >
              {icon}
            </span>
          )}
          {title}
        </a>
      </div>
    </Link>
  );
};

export default function NavBar(props) {
  // const router = useRouter();
  const { asPath } = useRouter();

  var breadcrumbs = asPath.split("/");
  breadcrumbs = breadcrumbs.slice(1, breadcrumbs.length - 1);

  // Shorthand for going up one URL level: "."
  return (
    <nav
      className={`${props.className} py-2 select-none font-light text-sm text-stone-800 dark:text-stone-200 border-b border-stone-800 dark:border-stone-200`}
    >
      <NavItem link="/" title="home" icon="🏠" animation="wigglelg" />
      {breadcrumbs.map((breadcrumb) => (
        <>
          <span className="px-1 inline-block">/</span>
          <NavItem link="." title={breadcrumb} />
        </>
      ))}
      {/* <div className="w-fit -1 inline-block group ">
        <button
          className="font-light text-sm text-stone-600 dark:text-stone-400"
          onClick={router.back}
        >
          <a
            className="p-1 cursor-pointer
          border border-solid border-transparent rounded-lg hover:border-stone-800 hover:dark:border-stone-200"
          >
            <span className="inline-block ">←</span> Back
          </a>
        </button>
      </div> */}
    </nav>
  );
}
