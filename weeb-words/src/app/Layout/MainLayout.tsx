"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainLayout: React.FC = () => {
  function consolelog() {
    console.log("Hello");
  }
  const links = [
    { href: "/aQuote", label: "H" },
    { href: "/aSubmit", label: "S" },
    { href: "/aGallery", label: "G" },
    { href: "#", label: "A" },
    { href: "#", label: "S" },
  ]

  return (
    <div
      className="fixed top-0 bottom-0 flex h-screen w-1/16 flex-col items-center gap-5"
      style={{ background: "var(--container-bg)" }}
    >
      {/* SideBar */}
      <h2 className="text-3xl mt-3 font-semibold text-sky-400">Quote</h2>
      <div className="flex flex-col items-center gap-10">
        <nav className="mt-5 flex flex-col gap-9 text-black">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-center font-bold my-1 h-8 w-11 cursor-pointer rounded-lg border border-gray-300 p-2"
              style={{ background: "var(--input-bg)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-1 flex-col">
        {/* Top search bar */}
        <div
          className="fixed top-0 right-0 left-1/16 w-full p-5"
          style={{ background: "var(--container-bg)" }}
        >
          <div className="flex gap-3 shadow-lg ">
            <label>Anime</label>
            <input
              type="text"
              placeholder="anime..."
              className="w-4/10 rounded-lg text-black"
              style={{ background: "var(--input-bg)" }}
            ></input>
            <label>Character</label>
            <input
              type="text"
              placeholder="character..."
              className="w-4/10 rounded-lg text-black"
              style={{ background: "var(--input-bg)" }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
