import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    if (index === rating) {
      setRating(0);
      setHover(0);
    } else {
      setRating(index);
    }
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="stars-wrapper">
      <h1>How would you rate my accordion?</h1>

      <div className="stars-counteiner">
        {[...Array(noOfStars)].map((_, i) => {
          const index = i + 1;
          const isActive = index <= (hover || rating);
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
              color={isActive ? "gold" : "lightgray"}
              role="button"
              tabIndex={0}
              aria-label={`Set rating to ${index} star${index > 1 ? "s" : ""}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(index);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
