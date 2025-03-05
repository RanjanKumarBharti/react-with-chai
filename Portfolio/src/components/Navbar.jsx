import React from "react";

function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white flex justify-between rounded-2xl">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div>
        <a href="#projects" className="px-3">
          Projects
        </a>
        <a href="#contact" className="px-3">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
