
import React, { useState } from 'react';

interface YouTubeUrlFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
  initialUrl?: string;
}

const YouTubeUrlForm: React.FC<YouTubeUrlFormProps> = ({ onSubmit, isLoading, initialUrl = '' }) => {
  const [videoUrl, setVideoUrl] = useState<string>(initialUrl);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (videoUrl.trim()) {
      onSubmit(videoUrl.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex items-center border-2 border-slate-300 rounded-lg shadow-sm focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary transition-all duration-200">
        <input
          type="url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter YouTube video URL (e.g., https://www.youtube.com/watch?v=...)"
          className="w-full px-4 py-3 text-slate-700 placeholder-slate-400 bg-transparent border-none focus:outline-none focus:ring-0"
          aria-label="YouTube video URL"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !videoUrl.trim()}
          className="px-6 py-3 text-white bg-brand-primary hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Summarize'
          )}
        </button>
      </div>
    </form>
  );
};

export default YouTubeUrlForm;
