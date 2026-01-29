import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Quote {
  author: string;
  content: string;
  tags: string[];
}

const fetchRandomQuote = async (): Promise<Quote> => {
  const response = await axios.get('https://api.freeapi.app/api/v1/public/quotes/quote/random');
  return response.data.data;
};

const TanStackQuoteCard: React.FC = () => {
  const {
    data: quote,
    error,
    isLoading,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['randomQuote'],
    queryFn: fetchRandomQuote,
  });

  if (isLoading) {
    return <p>Loading quote via TanStack Query...</p>;
  }

  if (error) {
    return <p className="error-message">Error fetching quote with TanStack Query: {(error as Error).message}</p>;
  }

  return (
    <div className="quote-card">
      <h2>(TanStack) "{quote?.content}"</h2>
      <p>- {quote?.author}</p>
      {quote?.tags && quote.tags.length > 0 && (
        <div className="quote-tags">
          {quote.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
      <button 
        onClick={() => refetch()} 
        className="refresh-button"
        disabled={isFetching}
      >
        {isFetching ? 'Refreshing...' : 'Refresh TanStack Quote'}
      </button>
    </div>
  );
};

export default TanStackQuoteCard;
