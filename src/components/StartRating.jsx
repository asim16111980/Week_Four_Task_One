import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex items-center gap-px">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const isFull = rating >= starValue;
        const isHalf = rating >= starValue - 0.5 && rating < starValue;

        return (
          <div
            key={starValue}
            className="relative cursor-pointer size-4"
            onMouseMove={(e) => handleMouseMove(e, starValue)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(rating)}
          >
            <FontAwesomeIcon
              icon={faStar}
              className="size-4 absolute inset-0 text-black opacity-25"
            />
            {isFull && (
              <FontAwesomeIcon
                icon={faStar}
                className="size-4 absolute inset-0 text-[#FFAD33]"
              />
            )}
            {isHalf && (
              <FontAwesomeIcon
                icon={faStarHalf}
                className="size-4 absolute inset-0 text-[#FFAD33]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
