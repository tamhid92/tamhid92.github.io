import React from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">pls hire me</h1>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-2xl shadow-md hover:bg-gray-800 transition"
      >
        Resume
      </a>
    </div>
  );
}