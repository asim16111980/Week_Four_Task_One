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
    <div className="flex items-center gap-px">
      {Array.from({ length: maxStars }, (_, index) => {
        const starValue = index + 1;
        const displayRating = hoverRating || rating;
        const isFull = displayRating >= starValue;
        const isHalf = displayRating >= starValue - 0.5 && displayRating < starValue;

        return (
          <div
            key={starValue}
            className="relative cursor-pointer size-4"
            onMouseMove={(e) => handleMouseMove(e, starValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(displayRating)}
          >
            <FontAwesomeIcon icon={faStar} className="size-4 absolute inset-0 text-black opacity-25" />
            {isFull && (
              <FontAwesomeIcon
                icon={faStar}
                className="size-4 absolute inset-0 text-[#FFAD33]"
              />
            )}
            {isHalf && (
              <FontAwesomeIcon icon={faStarHalf} className="size-4 absolute inset-0 text-[#FFAD33]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;

