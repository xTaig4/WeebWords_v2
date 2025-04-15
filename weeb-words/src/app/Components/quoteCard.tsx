"use client";

import { useState } from "react";

interface QuoteCardProps {
  image: string;
  quote?: string;
  name?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  image,
  quote = "Time doesn’t heal anything, it just teaches us how to live with pain.",
  name = "Uchiha Itachi",
}) => {
  return (
    <div className="group h-auto w-full rounded-lg bg-gray-800 p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
      <article className="flex flex-col items-start justify-center gap-4 text-center text-white">
        <img className="mx-auto object-scale-down" src={image}></img>
        <div className="w-full">
          <p
            className={`transition-all duration-300 ease-in-out ${
              quote.length > 120 ? "line-clamp-3 group-hover:line-clamp-none" : ""
            }`}
          >
            {quote}
          </p>
          <p className="font-bold mt-2">- {name}</p>
        </div>
      </article>
    </div>
  );
};

export default QuoteCard;
