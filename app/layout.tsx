import "@/styles/globals.css";
import { PostHogProvider } from "./providers";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bailey Kane",
  description:
    "Bailey Kane | Helping small businesses get more done with technology",
  creator: "Bailey Kane",
  manifest: "https://www.baileykane.co/manifest.json",
  twitter: {
    card: "summary",
    title: "Bailey Kane",
    description:
      "Bailey Kane | Helping small businesses get more done with technology",
    creator: "@BK610",
  },
  openGraph: {
    title: "Bailey Kane",
    description:
      "Bailey Kane | Helping small businesses get more done with technology",
    url: "https://www.baileykane.co/",
    siteName: "BaileyKane.co",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          <div
            className="flex flex-col items-center
    min-h-screen w-full
    bg-stone-100 dark:bg-stone-900
   text-stone-900 dark:text-stone-100"
          >
            <div className="max-w-7xl w-full p-2 space-y-10">
              <NavBar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  );
}
