import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

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
      <body className={clsx(roboto.className,'bg-amber-50')}>{children}</body>
    </html>
  );
}
