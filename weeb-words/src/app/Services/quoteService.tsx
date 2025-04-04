export class QuoteService {
  fetchQuoteFromApi = async (apiEndpoint: string) => {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    return await response.json();
  };

  postQuoteToApi = async (apiEndpoint: string, data: any) => {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to post quote");
    }
    return await response.json();
  };
}
 
const quoteService = new QuoteService();
export default quoteService;