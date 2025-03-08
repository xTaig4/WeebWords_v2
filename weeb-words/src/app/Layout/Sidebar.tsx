"use client";

import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    };


  return (
    <div className="bg-opacity-50 fixed top-0 bottom-0 left-0 z-50 bg-black">
      <div
        className={`transition-width fixed top-1/2 left-0 -translate-y-1/2 transform duration-300 ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <div className="flex h-full flex-col rounded-lg bg-pink-500 p-2">
          <button
            onClick={toggleSidebar}
            className="flex cursor-pointer justify-center rounded-lg border-none bg-pink-300 p-2 text-black"
          >
            {isCollapsed ? "Expand" : "Collapse"}
          </button>
          <nav className="mt-5 flex flex-col text-black">
            <Link
              href="/quote"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Home</span>
            </Link>
            <Link
              href="/submit"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Submit Quote</span>
            </Link>
            <Link
              href="#"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Link 3</span>
            </Link>
            <Link
              href="#"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Link 4</span>
            </Link>
            <Link
              href="#"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Link 5</span>
            </Link>
            <Link
              href="#"
              className="my-1 max-h-[40px] min-h-[40px] cursor-pointer rounded-lg border border-gray-300 bg-pink-300 p-2"
            >
              <span className={`${isCollapsed ? "hidden" : ""}`}>Link 6</span>
            </Link>
          </nav>
          <div className="flex items-center p-3">
            <img
              src="https://cdn.discordapp.com/attachments/668167761792466963/1346626050058354688/image.png?ex=67c8debd&is=67c78d3d&hm=097786ebb71140e3710e9ac3a4e8cd0674ce2c14453889de9298b5a9c850aaa2&"
              alt="Profile"
              className="mr-2 h-10 w-10 max-w-none rounded-full"
            />
            <span
              className={`font-bold text-black ${isCollapsed ? "hidden" : ""}`}
            >
              Username
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
