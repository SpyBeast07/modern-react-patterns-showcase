import { useState, useEffect, useCallback } from 'react'
import './App.css'
import QuoteCard from './components/QuoteCard';
import AxiosQuoteCard from './components/AxiosQuoteCard';
import TanStackQuoteCard from './components/TanStackQuoteCard';

interface QuoteData {
  author: string;
  content: string;
  tags: string[];
}

function App() {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchQuote = useCallback(async () => {
    setQuote(null); // Clear previous quote while loading new one
    setError(null); // Clear previous errors
    try {
      const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setQuote(result.data);
    } catch (e: any) {
      setError(e.message);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote, refreshTrigger]);

  const handleRefreshClick = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="App">
      <h1>Random Quote (Fetch API)</h1>
      {error && <p className="error-message">Error: {error}</p>}
      <QuoteCard quote={quote} />
      <button onClick={handleRefreshClick} className="refresh-button">Refresh Quote</button>

      <h1>Random Quote (Axios)</h1>
      <AxiosQuoteCard />

      <h1>Random Quote (TanStack Query)</h1>
      <TanStackQuoteCard />
    </div>
  );
}

export default App
