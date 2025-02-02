import Head from "next/head";
import NavBar from "./NavBar";

interface BaseLayoutProps {
  children: React.ReactElement;
  navbarVisible?: boolean;
  titleText?: string;
}

export default function BaseLayout({
  children,
  navbarVisible = true,
  titleText,
}: BaseLayoutProps): React.ReactElement {
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
    min-h-screen w-full
    bg-stone-50
    dark:bg-gradient-to-br dark:from-stone-900 dark:to-stone-800
    select-none text-stone-900 dark:text-stone-100"
      >
        <div className="max-w-7xl w-full p-2 space-y-4">
          <NavBar className={navbarVisible ? "" : "invisible"} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
