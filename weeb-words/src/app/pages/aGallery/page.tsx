"use client";

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import QuoteCard from "../../Components/quoteCard";

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
            "https://i.pinimg.com/736x/22/89/65/228965cc790b4f823fd02822d8fc69e2.jpg",
          _Quote:
            "Its not about winning or losing! its about me taking you on right here, right now!",
          firstName: "Mumen Rider",
          lastName: "",
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/e8/84/be/e884bee2271771717e72e2450e3e0f0c.jpg",
          _Quote: "A dropout will beat a genius through hard work.",
          firstName: "Lee",
          lastName: "Rock",
        },
        {
          id: 3,
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
      ];
      setQuotes(dummyQuotes);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <section className="mt-20 mr-10 ml-30 flex flex-col items-center rounded-lg p-10">
        <Masonry
          breakpointCols={{ default: 4, 1024: 3, 768: 2, 640: 1 }}
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
