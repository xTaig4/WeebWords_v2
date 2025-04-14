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
    <div className="rounded-lg bg-gray-800 p-4 shadow-md h-auto w-full hover:scale-105 transition-transform duration-300 ease-in-out ">
      <article className="flex flex-col items-start justify-center gap-4 text-white text-center">
        <img className="object-scale-down mx-auto" src={image}></img>
        <div className="w-full">
          <p className="">{quote}</p>
          <p className="font-bold">- {name}</p>
        </div>
      </article>
    </div>
  );
};

export default QuoteCard;
