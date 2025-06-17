
import React from 'react';
import YouTubeIcon from './icons/YouTubeIcon';
import SparklesIcon from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="py-6 mb-8 text-center">
      <div className="inline-flex items-center space-x-3">
        <YouTubeIcon className="w-16 h-16 text-brand-primary" />
        <h1 className="text-4xl font-bold text-slate-800">
          YouTube Video Summarizer
        </h1>
        <SparklesIcon className="w-10 h-10 text-amber-500" />
      </div>
      <p className="mt-2 text-lg text-slate-600">
        Get concise summaries of YouTube videos instantly.
      </p>
    </header>
  );
};

export default Header;
