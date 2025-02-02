import "@/styles/globals.css";
import { PostHogProvider } from "./providers";
import type { Metadata } from "next";

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
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
