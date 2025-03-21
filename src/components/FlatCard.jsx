import BaseCard from "./BaseCard";
import ProductColorOption from "./ProductColorOption";
import { useState } from "react";

const FlatCard = ({
  id,
  img,
  alt,
  isNew,
  name,
  netPrice,
  rating,
  rateCount,
  productColorOptions = [],
}) => {
  const badgeText = isNew && "New";
  const [productCurrentColor, setProductCurrentColor] = useState(productColorOptions[0]);
  const handleChangeProductColor = (e) => {
    setProductCurrentColor(e.target.value);
  };

  return (
    <BaseCard
      cardImg={img}
      altText={alt}
      badge={badgeText}
      badgeBgColor="bg-[#00FF66]"
      cardTitle={name}
      netPrice={netPrice}
      totalPrice={null}
      rating={rating}
      rateCount={rateCount}
    >
      {productColorOptions.map((color, index) => (
        <ProductColorOption
          key={index}
          productId={id}
          id={index}
          bgColor={color}
          onCheck={(e) => handleChangeProductColor(e)}
          state={productCurrentColor===color}
        />
      ))}
    </BaseCard>
  );
};

export default FlatCard;
