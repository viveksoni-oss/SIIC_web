import React from "react";

function AnimatedButton({ children }) {
  return (
    <button className="animated-button px-8 py-4 rounded-full">
      {children}
    </button>
  );
}
export default AnimatedButton;
