'use client'

import React, { useState } from 'react';

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="fixed left-0 top-0 bottom-0 bg-black bg-opacity-50 z-50">
            <div className={`fixed left-0 top-1/2 transform -translate-y-1/2 transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
                <div className="bg-pink-500 p-2 h-full flex flex-col rounded-lg">
                    <button onClick={toggleSidebar} className="bg-pink-300 text-black border-none p-2 cursor-pointer rounded-lg flex justify-center">
                        {isCollapsed ? 'Expand' : 'Collapse'}
                    </button>
                    <nav className="flex flex-col mt-5 text-black">
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 1</span>
                        </a>
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 2</span>
                        </a>
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 3</span>
                        </a>
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 4</span>
                        </a>
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 5</span>
                        </a>
                        <a href="#" className="bg-pink-300 border border-gray-300 p-2 my-1 cursor-pointer rounded-lg min-h-[40px] max-h-[40px]">
                            <span className={`${isCollapsed ? 'hidden' : ''}`}>Link 6</span>
                        </a>
                    </nav>
                    <div className="p-3 flex items-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/668167761792466963/1346626050058354688/image.png?ex=67c8debd&is=67c78d3d&hm=097786ebb71140e3710e9ac3a4e8cd0674ce2c14453889de9298b5a9c850aaa2&"
                            alt="Profile"
                            className="w-10 h-10 rounded-full mr-2 max-w-none" />
                        <span className={`font-bold text-black ${isCollapsed ? 'hidden' : ''}`}>Username</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;