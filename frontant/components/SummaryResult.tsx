
import React from 'react';
import { SummaryData } from '../types';

interface SummaryResultProps {
  data: SummaryData;
  onClear: () => void;
}

const SummaryResult: React.FC<SummaryResultProps> = ({ data, onClear }) => {
  const { videoDetails, summary } = data;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-xl">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <a href={videoDetails.videoUrl} target="_blank" rel="noopener noreferrer" className="block group">
            <img 
              src={videoDetails.thumbnailUrl} 
              alt={`Thumbnail for ${videoDetails.title}`} 
              className="rounded-lg shadow-md w-full aspect-video object-cover group-hover:opacity-90 transition-opacity"
            />
          </a>
          <a 
            href={videoDetails.videoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 text-sm text-brand-primary hover:text-red-700 underline block text-center md:text-left"
          >
            Watch on YouTube
          </a>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">{videoDetails.title}</h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <h3 className="text-lg font-medium text-slate-700 mt-4 mb-1">Summary:</h3>
            {summary.split('\\n\\n').map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={onClear}
          className="px-6 py-2 bg-slate-500 hover:bg-slate-600 text-white rounded-md transition-colors duration-200"
        >
          Summarize Another Video
        </button>
      </div>
    </div>
  );
};

export default SummaryResult;
