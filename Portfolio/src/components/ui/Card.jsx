import React from "react";

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden border h-32 ${className}`}>
      {children}
    </div>
  );
}
export default Card;
