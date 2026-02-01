// ModernLoader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full w-full space-x-2">
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-450"></div>
    </div>
  );
};

export default Loader;
