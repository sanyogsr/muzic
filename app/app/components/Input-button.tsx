"use client";
import React, { useState } from "react";

const ModernInputButton = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsClicked(true);
    console.log("Submitted:", inputValue);

    // Reset the click animation after 300ms
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div className=" p-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          {/* Input container with animated border */}
          <div
            className={`
              relative border-2 rounded-lg transition-all duration-300 ease-out
              ${
                isFocused
                  ? "border-blue-500 shadow-lg shadow-blue-100"
                  : "border-gray-300"
              }
            `}
          >
            {/* Label that floats when input has content or is focused */}
            <label
              className={`
                absolute pointer-events-none transition-all duration-200 ease-out
                ${
                  isFocused || inputValue
                    ? "text-xs text-blue-500 top-0 left-3 transform -translate-y-1/2 bg-white px-1"
                    : "text-gray-500 text-base left-4 top-1/2 transform -translate-y-1/2"
                }
              `}
            >
              Youutbe video Link
            </label>

            <input
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full p-4 outline-none bg-transparent text-gray-800 z-10"
              required
            />
          </div>

          {/* Submit Button with hover and click animations */}
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium
              py-3 px-6 rounded-lg transition-all duration-300 relative overflow-hidden
              ${
                isHovered
                  ? "shadow-lg shadow-blue-200"
                  : "shadow-md shadow-blue-100"
              }
              ${isClicked ? "scale-95" : "scale-100"}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
          >
            {/* Ripple effect on click (pure CSS) */}
            <span
              className={`
              absolute inset-0 transition-opacity duration-300
              ${isClicked ? "opacity-100" : "opacity-0"}
              bg-white/20
            `}
            ></span>

            {/* Button content with subtle hover animation */}
            <span className="relative flex items-center justify-center">
              <span>Add to Queue</span>
              <svg
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModernInputButton;
