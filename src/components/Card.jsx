import Button from "./Button";
import ProductColorOption from "./ProductColorOption";
import { useState } from "react";

const Card = ({
  cardImg = "",
  altText = "",
  hasBadge = false,
  discount = null,
  badgeBgColor = "",
  headerIcons = [],
  buttonIcon = null,
  buttonValue = "",
  cardTitle = "",
  netPrice = 0,
  totalPrice = 0,
  isRatingInline = false,
  rating = 0,
  rateCount = 0,
  hasOptions = false,
  productColorOptions = [],
}) => {
  const badgeText = discount ? discount && `-${discount}%` : "New";
  const [productCurrentColor, setProductCurrentColor] = useState(
    productColorOptions[0]
  );
  const handleChangeProductColor = (e) => {
    setProductCurrentColor(e.target.value);
  };
  return (
    <div className="w-full flex flex-col gap-4 font-['poppins'] group cursor-grab">
      <div className="w-full h-[250px] md:h-60 bg-[#F5F5F5] rounded relative flex justify-center pt-6">
        <div className="size-44 md:size-40 flex items-center justify-center">
          <img src={cardImg} alt={altText} loading="lazy" />
        </div>
        <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col justify-between">
          <div className="flex justify-between items-start p-3">
            {hasBadge && (
              <span
                className={`${badgeBgColor} text-[#FAFAFA] text-xs px-3 py-1 rounded`}
              >
                {badgeText}
              </span>
            )}
            <div className="flex flex-col gap-2 items-center ml-auto">
              {headerIcons.map((icon) => {
                return (
                  <span className="rounded-full p-2 text-xl bg-white">
                    {icon}
                  </span>
                );
              })}
            </div>
          </div>
          <Button value={buttonValue} icon={buttonIcon} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-base font-medium">{cardTitle}</h3>
        <div
          className={`flex gap-2 ${isRatingInline ? "flex-row" : "flex-col"}`}
        >
          <div className="flex gap-2">
            <span className="text-base font-medium text-[#DB4444]">
              ${netPrice}
            </span>
            {totalPrice && (
              <span className="text-base font-medium text-[#727272] line-through">
                ${totalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <StarRating initialRating={rating} />
            <span className="text-sm font-semibold text-[#727272]">
              ({rateCount})
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {hasOptions &&
            productColorOptions.map((color, index) => (
              <ProductColorOption
                key={index}
                productId={id}
                id={index}
                bgColor={color}
                onCheck={(e) => handleChangeProductColor(e)}
                state={productCurrentColor === color}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
