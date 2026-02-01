import React from "react";

interface ErrorUIProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorUI = ({
  message = "Something went wrong!",
  onRetry,
}: ErrorUIProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-background p-6 text-center">
      {/* Big Error Icon */}
      <div className="mb-6 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32" // bigger icon
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M12 2a10 10 0 11-10 10A10 10 0 0112 2z"
          />
        </svg>
      </div>

      {/* Big Error Message */}
      <p className="text-primary mb-6 font-semibold text-2xl">{message}</p>

      {/* Big Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg text-lg transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorUI;
