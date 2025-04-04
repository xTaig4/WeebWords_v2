import { useState } from "react";
import QuoteService from "../Services/quoteService";

const usePostQuote = (apiService: string) => {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [anime, setAnime] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [quote, setQuote] = useState<string>("");

  const postQuoteToApi = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsPosting(true);
    setError(null);

    const data = {
      firstName: firstName,
      lastName: lastName,
      quote: quote,
      image: imageUrl,
      anime: anime,
    };
    try {
        const response = await QuoteService.postQuoteToApi("apiService", data);

      if (response.ok) {
        alert("Submission successful!");
        // Optionally, reset the form
        setAnime("");
        setFirstName("");
        setLastName("");
        setQuote("");
        setImageUrl(undefined);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsPosting(false);
    }
  };

  return { postQuoteToApi, isPosting, error, imageUrl, anime, firstName, lastName, quote, setImageUrl, setAnime, setFirstName, setLastName, setQuote };
};

export default usePostQuote;
