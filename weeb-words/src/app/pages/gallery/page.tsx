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
            "https://i.pinimg.com/736x/70/53/61/705361087e4d24fbdb0b47fa990826d6.jpg",
          _Quote: "Believe it!",
          firstName: "Naruto",
          lastName: "Uzumaki",
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/22/89/65/228965cc790b4f823fd02822d8fc69e2.jpg",
          _Quote:
            "Its not about winning or losing! its about me taking you on right here, right now!",
          firstName: "Mumen Rider",
          lastName: "",
        },
        {
          id: 3,
          image:
            "https://i.pinimg.com/1200x/cd/7e/cc/cd7ecc88e2a1190acdc06352ea032f93.jpg",
          _Quote:
            "A place where someone still thinks about you is a place you can call home.",
          firstName: "Jiraiya",
          lastName: "",
        },
        {
          id: 4,
          image:
            "https://i.pinimg.com/736x/e8/84/be/e884bee2271771717e72e2450e3e0f0c.jpg",
          _Quote: "A dropout will beat a genius through hard work.",
          firstName: "Lee",
          lastName: "Rock",
        },
        {
          id: 5,
          image:
            "https://i.pinimg.com/736x/37/37/56/3737564dea042377aedd570f79e227a0.jpg",
          _Quote: "Study hard you little shit!",
          firstName: "Katsuki",
          lastName: "Bakugo",
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
      <section className="ml-0 flex flex-col items-center rounded-lg p-10 sm:p-8 lg:ml-20">
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
