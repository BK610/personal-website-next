import Head from "next/head";
import NavBar from "@/components/NavBar";

interface BaseLayoutProps {
  children: React.ReactElement;
  navbarVisible?: boolean;
  titleText?: string;
  className?: string;
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
      {children}
    </>
  );
}
