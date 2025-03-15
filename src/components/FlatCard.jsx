import BaseCard from "./BaseCard";
import ProductColorOption from "./ProductColorOption";
import { useState, useEffect } from "react";

const FlatCard = ({ img, alt, title, netPrice, totalPrice, rating, rateCount, productColorOptions=[] }) => {
    const badgeText = "New";
    const [colorOptions, setColorOptions] = useState(productColorOptions);

    // useEffect(() => {
    //     setColorOptions(productColorOptions || []);
    // }, [productColorOptions]);

    const handleProductColorOption = (e) => {
        setColorOptions((prevOptions) =>
            prevOptions.map((option) => ({
                ...option,
                state: e.target.id === option.id ? true : false
            }))
        );
    };
    
    return (
        <BaseCard
            cardImg={img}
            altText={alt}
            badge={badgeText}
            badgeBgColor="bg-[#00FF66]"
            cardTitle={title}
            netPrice={netPrice}
            totalPrice={totalPrice}
            rating={rating}
            rateCount={rateCount}
        >
            {colorOptions.map((option) => (
                <ProductColorOption
                    key={option.id}
                    id={option.id}
                    bgColor={option.color}
                    onCheck={(e) => handleProductColorOption(e)}
                    state={option.state}
                />
            ))}
        </BaseCard>
    );
};

export default FlatCard;
