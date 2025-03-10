import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StartRating";

const FlatCard = ({ img, discount, title, netPrice, totalPrice, stars, ratings }) => {
    const handleRatingChange = (newRating) => {
        console.log("التقييم الجديد:", newRating);
      };
    return (
        <div className="w-64 h-80 font-['poppins']">
            <div className="w-full h-56 bg-[#F5F5F5] rounded relative flex justify-center items-center">
                <img src={img} alt="Cart With Flat Discount Image" />
                <div className="absolute inset-0 w-full h-full bg-transparent flex justify-between items-start p-4">
                    <span className="bg-[#DB4444] text-[#FAFAFA] text-xs px-3 py-1 rounded">-{discount}%</span>
                    <div className="flex flex-col gap-2 items-center">
                        <FontAwesomeIcon icon={faHeart} className="rounded-full p-2 bg-white" />
                        <FontAwesomeIcon icon={faEye} className="rounded-full p-2 bg-white" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-medium">{title}</h3>
                <div className="flex gap-2">
                    <span className="text-base font-medium text-[#DB4444]">${netPrice}</span>
                    <span className="text-base font-medium text-[#727272] line-through">${totalPrice}</span>
                </div>
                <div className="flex gap-2">
                <StarRating maxStars={5} initialRating={3.5}/>
                    <span className="text-sm font-semibold text-[#727272]">({ratings})</span>
                </div>
            </div>
        </div>
    );
};

export default FlatCard;
