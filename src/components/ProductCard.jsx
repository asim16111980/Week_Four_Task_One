// import {  useState } from "react";
// import Button from "./Button";
// import StarRating from "./StartRating";
// import ProductColorOption from "./ProductColorOption";

// const ProductCard = ({
//   className="",
//   id=null,
//   cardImg = "",
//   altText = "",
//   hasBadge = false,
//   discount = null,
//   badgeBgColor = "",
//   headerIcons = [],
//   buttonIcon = null,
//   cardTitle = "",
//   netPrice = 0,
//   totalPrice = null,
//   isRatingInline = false,
//   rating = 0,
//   rateCount = 0,
//   productColorOptions = [],
// }) => {
//   const badgeText = discount ? discount && `-${discount}%` : "New";
//   const [productCurrentColor, setProductCurrentColor] = useState(
//     productColorOptions[0]
//   );
//   const handleChangeProductColor = (e) => {
//     setProductCurrentColor(e.target.value);
//   };
//   return (
//     <div className={` flex flex-col gap-4 font-poppins group ${className}`}>
//       <div className="w-full min-h-[200px] md:h-60 bg-[#F5F5F5] rounded relative flex justify-center items-center">
//         <div className="max-h-28 items-stretch flex justify-center">
//           <img src={cardImg} alt={altText} loading="lazy" />
//         </div>
//         <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col justify-between">
//           <div className="flex justify-between items-start p-1 md:p-3">
//             {hasBadge && (
//               <span
//                 className={`${badgeBgColor} text-neutral-50 text-xs px-3 py-1 rounded`}
//               >
//                 {badgeText}
//               </span>
//             )}
//             <div className="flex flex-col gap-2 items-center ml-auto">
//               {headerIcons.map((icon,index) => {
//                 return (
//                   <span key={index} className="rounded-full p-1 sm:p-2 text-xl bg-white cursor-pointer">
//                     {icon}
//                   </span>
//                 );
//               })}
//             </div>
//           </div>
//           <Button value="Add To Cart" icon={buttonIcon} className="hidden group-hover:block w-full h-10 bg-black rounded-b text-white" />
//         </div>
//       </div>
//       <div className="flex flex-col items-start gap-2">
//         <h3 className="max-w-full text-sm md:text-base font-medium overflow-hidden whitespace-nowrap text-ellipsis">{cardTitle}</h3>
//         <div
//           className={`flex gap-2 ${isRatingInline ? "flex-col md:flex-row" : "flex-col"}`}
//         >
//           <div className="flex gap-2">
//             <span className="text-sm md:text-base font-medium text-[#DB4444]">
//               ${netPrice}
//             </span>
//             {totalPrice && (
//               <span className="text-sm md:text-base font-medium text-[#727272] line-through">
//                 ${totalPrice}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center gap-2">
//             <StarRating initialRating={rating} />
//             <span className="text-xs md:text-sm font-semibold text-[#727272]">
//               ({rateCount})
//             </span>
//           </div>
//         </div>
//         <div className="flex items-center gap-1">
//           {productColorOptions &&
//             productColorOptions.map((color, index) => (
//               <ProductColorOption
//                 key={index}
//                 productId={id}
//                 id={index}
//                 bgColor={color}
//                 onCheck={(e) => handleChangeProductColor(e)}
//                 state={productCurrentColor === color}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import { useState, useCallback } from "react";
import Button from "./Button";
import StarRating from "./StartRating";
import ProductColorOption from "./ProductColorOption";
import Icon from "./Icon";

const ProductCard = ({
  className = "",
  id = null,
  cardImg = "",
  altText = "",
  hasBadge = false,
  discount = null,
  badgeBgColor = "",
  headerIcons = [],
  buttonIcon = null,
  cardTitle = "",
  netPrice = 0,
  totalPrice = null,
  isRatingInline = false,
  rating = null,
  rateCount = null,
  productColorOptions = [],
}) => {
  const badgeText = discount ? `-${discount}%` : "New";
  const [productCurrentColor, setProductCurrentColor] = useState(
    productColorOptions[0]
  );

  const handleChangeProductColor = useCallback((e) => {
    setProductCurrentColor(e.target.value);
  }, []);

  return (
    <div className={`flex flex-col gap-4 font-poppins group ${className}`}>
      {/* Image Section */}
      <div className="w-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] bg-[#F5F5F5] rounded relative flex justify-center items-center">
        <div className="h-28 sm:h-32 md:h-36 flex justify-center items-center">
          <img
            src={cardImg}
            alt={altText}
            loading="lazy"
            className="object-contain w-full max-h-full"
          />
        </div>
        <div className="absolute inset-0 w-full h-full flex flex-col justify-between">
          <div className="flex justify-between items-start p-1 md:p-3">
            {hasBadge && (
              <span
                className={`${badgeBgColor} text-neutral-50 text-xs px-3 py-1 rounded`}
              >
                {badgeText}
              </span>
            )}
            <div className="flex flex-col gap-2 items-center ml-auto">
              {headerIcons.map((icon, index) => (
                <Icon
                  key={index}
                  icon={icon}
                  className="rounded-full p-1 sm:p-2 text-xl bg-white cursor-pointer"
                />
              ))}
            </div>
          </div>
          <Button
            value="Add To Cart"
            icon={buttonIcon}
            className="hidden group-hover:block w-full h-10 bg-black rounded-b text-white"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col items-start gap-2">
        <h3 className="max-w-full text-sm sm:text-base md:text-lg font-medium overflow-hidden whitespace-nowrap text-ellipsis">
          {cardTitle}
        </h3>
        <div
          className={`flex gap-2 ${
            isRatingInline ? "flex-col md:flex-row" : "flex-col"
          }`}
        >
          <div className="flex gap-2">
            <span className="text-sm sm:text-base md:text-lg font-medium text-[#DB4444]">
              ${netPrice}
            </span>
            {totalPrice && (
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#727272] line-through">
                ${totalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {rating && <StarRating initialRating={rating} />}
            {rateCount && (
              <span className="text-xs sm:text-sm md:text-base font-semibold text-[#727272]">
                ({rateCount})
              </span>
            )}
          </div>
        </div>

        {/* Color Options */}
        <div className="flex items-center gap-1">
          {productColorOptions.map((color, index) => (
            <ProductColorOption
              key={`${id || "product"}-color-${index}`}
              productId={id}
              id={index}
              bgColor={color}
              onCheck={handleChangeProductColor}
              state={productCurrentColor === color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
