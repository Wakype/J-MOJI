import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ReactQuery from "./reactQueryProviders";
import TopNav from "./components/TopNav";
import ProgressBarClient from "./components/ProgressBar";

export const metadata: Metadata = {
  title: "J-Moji: Japanese Emoji (Kaomoji)",
  description:
    "Add fun Kaomoji to your messages with just a click for livelier chats! Kaomoji (顔文字) is a popular Japanese emoticon style crafted from characters and punctuation, conveying emotions in text and online communication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        {/* <ReactQuery> */}
        <Providers>
          <ProgressBarClient />
          <TopNav />
          {children}
        </Providers>
        {/* </ReactQuery> */}
      </body>
    </html>
  );
}
