import Nav from '@/components/navigation/nav';
import Link from '@/node_modules/next/link';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  profile,
}: Readonly<{
  children: React.ReactNode;
  profile: React.ReactNode
}>) {
  const isAdmin = false;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        {isAdmin && profile}
      </body>
    </html>
  );
}
