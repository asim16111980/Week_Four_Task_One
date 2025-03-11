import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ maxStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseMove = (event, starValue) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const hoverValue = mouseX < width / 2 ? starValue - 0.5 : starValue;
    setHoverRating(hoverValue);
  };

  return (
    <div className="flex space-x-1 text-gray-400 text-2xl">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const displayRating = hoverRating || rating;
        const isFull = displayRating >= starValue;
        const isHalf = displayRating >= starValue - 0.5 && displayRating < starValue;

        return (
          <div
            key={starValue}
            className="relative cursor-pointer w-6 h-6"
            onMouseMove={(e) => handleMouseMove(e, starValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(displayRating)}
          >
            <FontAwesomeIcon icon={faStar} className="absolute inset-0 text-gray-400" />
            {isFull && (
              <FontAwesomeIcon
                icon={faStar}
                className="absolute inset-0 text-yellow-400"
              />
            )}
            {isHalf && (
              <FontAwesomeIcon icon={faStarHalf} className="absolute inset-0 text-yellow-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;

