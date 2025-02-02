import "@/styles/globals.css";
import { PostHogProvider } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
