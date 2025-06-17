
import React from 'react';

interface AlertMessageProps {
  message: string;
  type?: 'error' | 'success' | 'info';
  onDismiss?: () => void;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, type = 'error', onDismiss }) => {
  const baseClasses = "p-4 rounded-md text-sm";
  let typeClasses = "";

  switch (type) {
    case 'error':
      typeClasses = "bg-red-100 text-red-700 border border-red-300";
      break;
    case 'success':
      typeClasses = "bg-green-100 text-green-700 border border-green-300";
      break;
    case 'info':
      typeClasses = "bg-blue-100 text-blue-700 border border-blue-300";
      break;
  }

  return (
    <div className={`${baseClasses} ${typeClasses} w-full max-w-2xl mx-auto my-4 flex justify-between items-center shadow-md`} role="alert">
      <span>{message}</span>
      {onDismiss && (
        <button 
          onClick={onDismiss} 
          className="ml-4 text-inherit hover:opacity-75 focus:outline-none"
          aria-label="Dismiss alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AlertMessage;
