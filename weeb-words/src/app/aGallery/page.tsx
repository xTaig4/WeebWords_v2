"use client";

import React, { useEffect, useState } from "react";
import Masonry from 'react-masonry-css';
import QuoteCard from "../Components/quoteCard";

interface Quote {
  id: number;
  firstName: string;
  lastName: string;
  _Quote: string;
  image: string;
}

const GalleryPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://localhost:7028/api/Quotes");
      const data: Quote[] = await response.json();
      setQuotes(data);
    } catch (error) {
      console.error(
        "Replaced with dummy data, due to service not being up or failed to retrieve quotes",
        error,
      );
      const dummyQuotes: Quote[] = [
        {
          id: 1,
          image:
            "https://i.pinimg.com/736x/14/71/08/1471089013dad6ad09d1e46cf6a6b7d8.jpg",
          _Quote:
            "Time doesn’t heal anything, it just teaches us how to live with pain.",
          firstName: "Itachi",
          lastName: "Uchiha",
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/99/f6/ed/99f6ed76292397628a35d5ab77d6f543.jpg",
          _Quote: "I never quite realized... how beautiful this world is",
          firstName: "A2",
          lastName: "",
        },
        {
          id: 3,
          image:
            "https://i.pinimg.com/736x/90/d8/52/90d852c9a59b0dc7e466ead1b4650d64.jpg",
          _Quote: "A dropout will beat a genius through hard work.",
          firstName: "Lee",
          lastName: "Rock",
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/99/f6/ed/99f6ed76292397628a35d5ab77d6f543.jpg",
          _Quote: "I never quite realized... how beautiful this world is",
          firstName: "A2",
          lastName: "",
        },
      ];
      setQuotes(dummyQuotes);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="mt-25 mr-15 ml-40 bg-gray-900">
      <section className="flex h-full w-full flex-col items-center rounded-lg bg-gray-500 p-10 shadow-md ">
        <h1 className="mb-10 text-4xl text-white font-light">Gallery</h1> 
          <Masonry
          breakpointCols={{ default: 4, 768: 2, 1024: 3 }}
          className="flex gap-4"
          columnClassName="masonry-column space-y-4"
          >
          {quotes.map((Quote) => (
            <QuoteCard
              image={Quote.image}
              quote={Quote._Quote}
              name={`${Quote.lastName} ${Quote.firstName}`}
            />
          ))}
          </Masonry>
      </section>
    </div>
  );
};

export default GalleryPage;
