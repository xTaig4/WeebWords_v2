'use client'

import React from "react"

interface TagProps {
    text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {

    return (
        <span className="rounded-full bg-amber-200 px-3 h-5 flex items-center justify-center text-xs font-semibold text-amber-800 
            hover:bg-amber-400">
            {text}
        </span>
    );
};

export default Tag;
