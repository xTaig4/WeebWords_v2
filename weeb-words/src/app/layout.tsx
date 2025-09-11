import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./Layout/MainLayout";
import SearchBar from "./Components/tagSearch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="invisible lg:visible">
          <MainLayout />
        </div>
        <div className="visible">
          <SearchBar left="1/24" width="23/24" height="15" />
        </div>
        {children}
      </body>
    </html>
  );
}
