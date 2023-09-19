import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-20 w-16 border-t-2  border-b-4 border-white-900"></div>
  </div>
  );
};

export default Loading;
