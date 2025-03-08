"use client";

import React from "react";

const QuotePage: React.FC = () => {
  return (
    <div className="ml-28 flex min-h-screen flex-wrap items-center justify-center">
      <div className="grid w-full grid-cols-1 items-center justify-center p-10 md:h-auto md:w-3/4 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col gap-5 md:order-1 md:w-3/4">
          <p className="mb-4 text-center text-xl font-semibold text-white">
            "A hero is not the one who never falls. He is the one who gets up
            again and again - Rock Lee"
          </p>
          <button className="rounded-lg bg-blue-500 p-2 text-white">
            Click Me
          </button>
        </div>
        <div className="md:w-100% order-1 flex w-full items-center justify-center md:order-2">
          <img
            src="https://i.pinimg.com/736x/80/27/9b/80279bc1d59ae2ffd1ff07aee8b87b04.jpg"
            alt="Sample"
            className="h-160 rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
