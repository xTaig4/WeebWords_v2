"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainLayout: React.FC = () => {
  const links = [
    { href: "/pages/quote", icon: "/home.svg" },
    { href: "/pages/submit", icon: "/add-square.svg" },
    { href: "/pages/gallery", icon: "/gallery.svg" },
    { href: "#", label: "A" },
    { href: "#", label: "S" },
  ];

  return (
    <div
      className="fixed top-0 bottom-0 flex h-screen w-1/24 flex-col items-center gap-5 border-r-1 border-amber-200"
      style={{ background: "var(--background)" }}
    >
      {/* SideBar */}
      <h2 className="mt-4 text-2xl font-semibold text-sky-400">Q</h2>
      <div className="flex flex-col items-center gap-10">
        <nav className="mt-5 flex flex-col gap-4 text-black">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="my-1 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-gray-300 p-1 text-center font-bold"
              style={{ background: "var(--input-bg)" }}
            >
              <img className="h-8 w-8" src={link.icon} />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
