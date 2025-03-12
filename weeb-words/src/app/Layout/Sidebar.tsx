"use client";

import React from "react";
import Search from "./Search";


const SidebarPage: React.FC = () => {
  return (
    <div
      className="top-0 bottom-0 z-0 flex h-screen w-1/12 flex-col items-center gap-5"
      style={{ background: "var(--container-bg)" }}
    >
      <h2 className="text-3xl font-semibold">Sidebar</h2>
      <div className="flex flex-col items-center gap-10">
        <button className="h-10 w-15 rounded-lg bg-teal-600">1</button>
        <button className="h-10 w-15 rounded-lg bg-teal-600">2</button>
        <button className="h-10 w-15 rounded-lg bg-teal-600">3</button>
        <button className="h-10 w-15 rounded-lg bg-teal-600">4</button>
      </div>
      <div className="flex flex-1">
        <Search />
      </div>
    </div>
  );
};
export default SidebarPage;
