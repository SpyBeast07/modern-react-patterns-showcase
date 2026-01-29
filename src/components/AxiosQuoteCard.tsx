import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface Quote {
  author: string;
  content: string;
  tags: string[];
}

const AxiosQuoteCard: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.freeapi.app/api/v1/public/quotes/quote/random');
      setQuote(response.data.data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const handleRefreshClick = () => {
    fetchQuote();
  };

  if (loading) {
    return <p>Loading quote via Axios...</p>;
  }

  if (error) {
    return <p className="error-message">Error fetching quote with Axios: {error}</p>;
  }

  return (
    <div className="quote-card">
      <h2>(Axios) "{quote?.content}"</h2>
      <p>- {quote?.author}</p>
      {quote?.tags && quote.tags.length > 0 && (
        <div className="quote-tags">
          {quote.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
      <button onClick={handleRefreshClick} className="refresh-button">Refresh Axios Quote</button>
    </div>
  );
};

export default AxiosQuoteCard;
