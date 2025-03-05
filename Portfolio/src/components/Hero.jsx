import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        Hello, I'm Ranjan Kumar Bharti👋
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        A passionate React developer creating elegant web solutions.
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer">
        Download Resume
      </button>
    </section>
  );
}
