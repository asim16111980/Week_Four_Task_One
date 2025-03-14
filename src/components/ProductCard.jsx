import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StartRating";
import ProductColorOption from "./ProductColorOption";
import { useState } from "react";

const ProductCard = ({ img, discount = null, discountStyle, title, netPrice, totalPrice = null, ratings, }) => {
    const [productColorOptions, setProductColorOptions] = useState([{ id: "red", color: "red", state: false }, { id: "blue", color: "blue", state: false }]);
    const handleProductColorOption = (e) => {
        setProductColorOptions(productColors =>
            productColors.map(option => ({
                ...option,
                state: option.id === e.target.id
            }))
        );
    };
    return (
        <div className="w-64 h-80 font-['poppins'] group">
            <div className="w-full h-56 bg-[#F5F5F5] rounded relative flex justify-center items-center">
                <img src={img} alt="Cart With Flat Discount Image" />
                <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col justify-between">
                    <div className="flex justify-between items-start p-3">
                        {discount && <span className={`${discountStyle} text-[#FAFAFA] text-xs px-3 py-1 rounded`}>-{discount}%</span>}
                        <div className="flex flex-col gap-2 items-center ml-auto">
                            <FontAwesomeIcon icon={faHeart} className="rounded-full p-2 bg-white" />
                            <FontAwesomeIcon icon={faEye} className="rounded-full p-2 bg-white" />
                        </div>
                    </div>
                    <button type="button" className="hidden group-hover:block w-full h-10 bg-black rounded-b text-base font-medium text-white">Add To Cart</button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-medium">{title}</h3>
                <div className={`flex gap-2 ${totalPrice ? "flex-col" : "flex-row"}`}>
                    <div className="flex gap-2">
                        <span className="text-base font-medium text-[#DB4444]">${netPrice}</span>
                        {totalPrice && <span className="text-base font-medium text-[#727272] line-through">${totalPrice}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <StarRating maxStars={5} initialRating={3.5} />
                        <span className="text-sm font-semibold text-[#727272]">({ratings})</span>
                    </div>
                </div>
                <div>
                    <ProductColorOption id="red" bgColor={productColorOptions[0].color} onCheck={(e) => handleProductColorOption(e)} state={productColorOptions[0].state} />
                    <ProductColorOption id="blue" bgColor={productColorOptions[1].color} onCheck={(e) => handleProductColorOption(e)} state={productColorOptions[1].state} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
