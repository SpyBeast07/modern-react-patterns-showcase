import React from 'react';

interface Quote {
  author: string;
  content: string;
  tags: string[];
}

interface QuoteCardProps {
  quote: Quote | null;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  if (!quote) {
    return <p>Loading quote...</p>;
  }

  return (
    <div className="quote-card">
      <h2>"{quote.content}"</h2>
      <p>- {quote.author}</p>
      {quote.tags && quote.tags.length > 0 && (
        <div className="quote-tags">
          {quote.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
