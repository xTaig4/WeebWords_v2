"use client";

import React, {useState, useEffect } from "react";

const QuotePage: React.FC = () => {
  const [quote, setQuote] = useState("A hero is not the one who never falls. He is the one who gets up again and again - Rock Lee")
  const [image, setImage] = useState('https://i.pinimg.com/736x/80/27/9b/80279bc1d59ae2ffd1ff07aee8b87b04.jpg')

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://localhost:7028/api/Quotes/Random/QuoteDTO")
      const data = await response.json()
      setQuote(`${data._Quote} - ${data.lastName} ${data.firstName}`)
      setImage(data.image)
    } catch (error) {
      console.error("Failed to retreive quote", error)
    }
  };

  return (
    <div className="ml-28 flex min-h-screen flex-wrap items-center justify-center">
      <div className="grid w-full grid-cols-1 items-center justify-center p-10 md:h-auto md:w-3/4 md:grid-cols-2">
        <div className="order-2 flex w-full flex-col gap-5 md:order-1 md:w-3/4">
          <p className="mb-4 text-center text-xl font-semibold text-white">
            {quote}
          </p>
          <button 
            className="rounded-lg bg-blue-500 p-2 text-white"
            onClick={fetchQuote}>
            Click Me
          </button>
        </div>
        <div className="md:w-100% order-1 flex w-full items-center justify-center md:order-2">
          <img
            src={image}
            alt="Sample"
            className="h-160 rounded-4xl mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
