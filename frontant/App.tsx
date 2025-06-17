
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import YouTubeUrlForm from './components/YouTubeUrlForm';
import SummaryResult from './components/SummaryResult';
import AlertMessage from './components/AlertMessage';
import { summarizeYouTubeVideo, extractYouTubeVideoId } from './services/summarizationService';
import { SummaryData, ApiError } from './types';

const App: React.FC = () => {
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  const handleSummarize = useCallback(async (url: string) => {
    if (!extractYouTubeVideoId(url)) {
      setError('Invalid YouTube URL. Please check the format.');
      setSummaryData(null);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setSummaryData(null); // Clear previous summary
    setCurrentUrl(url);

    try {
      const result = await summarizeYouTubeVideo(url);
      setSummaryData(result);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'An unknown error occurred.');
      console.error("Summarization error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setSummaryData(null);
    setError(null);
    // Optionally clear currentUrl if you want the input field to reset completely
    // setCurrentUrl(''); 
  }, []);
  
  const dismissError = useCallback(() => {
    setError(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full container mx-auto">
        <Header />
        
        <main className="mt-8">
          {!summaryData && (
            <YouTubeUrlForm 
              onSubmit={handleSummarize} 
              isLoading={isLoading}
              initialUrl={currentUrl}
            />
          )}

          {error && (
            <AlertMessage message={error} type="error" onDismiss={dismissError} />
          )}
          
          {isLoading && !error && (
            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2 text-slate-600">
                <svg className="animate-spin h-8 w-8 text-brand-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg font-medium">Summarizing your video... Please wait.</span>
              </div>
            </div>
          )}

          {summaryData && !isLoading && !error && (
            <SummaryResult data={summaryData} onClear={clearResults} />
          )}
        </main>

        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} YouTube Summarizer. Powered by SoumyaAI.</p>
          <p className="mt-1">This is a application. Summaries are for informational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
