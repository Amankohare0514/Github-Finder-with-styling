import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-20 w-16 border-t-4 border-b-4 border-blue-900"></div>
    <p className="text-gray-700 text-xl font-semibold mt-4">Loading...</p>
  </div>
  );
};

export default Loading;
