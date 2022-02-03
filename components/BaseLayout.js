import Head from "next/head";
import NavBar from "./NavBar";

export default function BaseLayout({ children, navbarVisible, titleText }) {
  var navbar = true; // Default navbar to visible
  // console.log(navbarVisible);
  // console.log(navbar);
  if (typeof navbarVisible !== "undefined") {
    navbar = navbarVisible ? "" : "invisible";
  }
  // console.log(navbar);

  var title = "Bailey Kane";

  if (typeof titleText !== "undefined") {
    title = title + " | " + titleText;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className="flex flex-col items-center
    h-full min-h-screen w-full min-w-screen
    bg-repeat bg-local bg-base dark:bg-base-dark
    select-none dark:text-gray-100"
      >
        <div className="max-w-2xl w-full p-2 pb-4 space-y-4">
          <NavBar className={navbar} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
