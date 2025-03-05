import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded"></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer">
          Send Message
        </button>
      </form>
    </section>
  );
}
