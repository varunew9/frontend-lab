import { useEffect, useState } from "react";
import { Button } from "../../../components/ui";
import styles from "../RandomQuote.module.scss";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const URL = "https://dummyjson.com/quotes/random";

async function callApi(): Promise<Quote> {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("API fetch failed");
  }

  return response.json();
}

export function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getQuote = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const data = await callApi();
      setQuote(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi()
      .then(setQuote)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className={styles.content}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.content}>Error: {error}</div>;
  }

  return (
    <div className={styles.content}>
      {/* <div className={styles.title}>{quote.quote}</div> */}
      <p className={styles.description}>{quote?.quote}</p>
      <p className={styles.description}>-- by {quote?.author}</p>

      <Button variant="primary" onClick={getQuote}>
        Get More Quote
      </Button>
    </div>
  );
}
