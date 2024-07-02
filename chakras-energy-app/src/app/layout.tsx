"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {StoreProvider} from "@/app/StoreProvider";
import {Provider} from "react-redux";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "Chakras energy App",
  description: "This app helps you to explore your lead chakra",
};*/

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
      <StoreProvider>
          <html lang="en">
              <body className={inter.className}>
                  <main className={'min-h-screen'}>
                      <Header />
                      {children}
                      <Footer />
                  </main>
              </body>
          </html>
      </StoreProvider>

  );
}
