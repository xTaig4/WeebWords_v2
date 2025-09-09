import { useState } from "react";
import QuoteService from "../Services/quoteService";

export const useQuote = (apiService: string) => {
  const [quote, setQuote] = useState(
    "A hero is not the one who never falls. He is the one who gets up again and again - Rock Lee",
  );
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/80/27/9b/80279bc1d59ae2ffd1ff07aee8b87b04.jpg",
  );

  const fetchQuote = async () => {
    try {
      const data = await QuoteService.fetchQuoteFromApi(apiService);
      setQuote(`${data._Quote} - ${data.lastName} ${data.firstName}`);
      setImage(data.image);
    } catch (error) {
      console.error("Failed to retrieve quote", error);
    }
  };

  return { quote, image, fetchQuote };
};

export default useQuote;
