import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ maxStars = 5, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleMouseMove = (event, starValue) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - left;
    const hoverValue = mouseX < width / 2 ? starValue - 0.5 : starValue;
    setHoverRating(hoverValue);
  };

  return (
    <div className="flex space-x-1 text-yellow-400">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const displayRating = hoverRating || rating;
        const isFull = displayRating >= starValue;
        const isHalf = displayRating >= starValue - 0.5 && displayRating < starValue;

        return (
          <div
            key={starValue}
            className="relative cursor-pointer text-lg"
            onMouseMove={(e) => handleMouseMove(e, starValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(displayRating)}
          >
            {isFull ? (
              <FontAwesomeIcon icon={faStar} />
            ) : isHalf ? (
              <FontAwesomeIcon icon={faStarHalf} />
            ) : (
              <FontAwesomeIcon icon={faStar} className="text-gray-400" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
