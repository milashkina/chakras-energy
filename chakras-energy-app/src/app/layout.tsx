import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chakras energy App",
  description: "This app helps you to explore your lead chakra",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <main className={'min-h-screen'}>
        <Header />
        {children}
        <Footer />
      </main>
      </body>
      </html>
  );
}
