import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar } from "@/components/common/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Article App",
  description: "Article app with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar title="Article App" />
        <main className="py-4 px-16">{children}</main>
      </body>
    </html>
  );
}
