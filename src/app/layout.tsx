import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Head from "next/head";

const roboto = Roboto({
  weight: ['100','300','400','500' ,'700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Frontend Case",
  description: "Frontend Case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=1280, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={clsx(roboto.className,'sm:bg-[#fefcf2] bg-white')}>{children}</body>
    </html>
  );
}
