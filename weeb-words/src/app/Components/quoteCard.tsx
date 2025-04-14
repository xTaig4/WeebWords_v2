"use client";

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
    <div className="rounded-lg bg-gray-800 p-4 shadow-md h-130 w-85 hover:scale-105 transition-transform duration-300 ease-in-out">
      <article className="flex flex-col items-center justify-center gap-4">
        <img className="h-90" src={image}></img>
        <div>
          <p className="text-center">{quote}</p>
          <p className="text-center font-bold">- {name}</p>
        </div>
      </article>
    </div>
  );
};

export default QuoteCard;
