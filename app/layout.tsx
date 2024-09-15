import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inconsolata, Roboto } from "next/font/google";
import React from "react";

const interFont = Inter({ subsets: ["latin"] });
const inconsolataFont = Inconsolata({ subsets: ["latin"] });
const robotoFont = Roboto({ subsets: ["latin"], weight: ["400"] });

// Metadata
export const metadata: Metadata = {
  title: "",
  description: "",
  keywords: "",
};

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>
        <NavBar />
        <p>XXY</p>
        {children}
      </body>
    </html>
  );
}
