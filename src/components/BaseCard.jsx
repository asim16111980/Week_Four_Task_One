import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./StartRating";

const BaseCard = ({ cardImg, altText, badge, badgeBgColor, cardTitle, netPrice, totalPrice = null, rating, rateCount,ratingInline=false, children }) => {
    return (
        <div className="w-full flex flex-col gap-4 font-['poppins'] group cursor-grab">
            <div className="w-full h-[250px] md:h-60 bg-[#F5F5F5] rounded relative flex justify-center pt-6">
                <div className="size-44 md:size-40 flex items-center justify-center">
                <img src={cardImg} alt={altText} loading="lazy"/>
                </div> 
                <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col justify-between">
                    <div className="flex justify-between items-start p-3">
                        {badge && <span className={`${badgeBgColor} text-[#FAFAFA] text-xs px-3 py-1 rounded`}>{badge}</span>}
                        <div className="flex flex-col gap-2 items-center ml-auto">
                            <FontAwesomeIcon icon={faHeart} className="rounded-full p-2 text-xl bg-white" />
                            <FontAwesomeIcon icon={faEye} className="rounded-full p-2 text-xl bg-white" />
                        </div>
                    </div>
                    <button type="button" className="hidden group-hover:block w-full h-10 bg-black rounded-b text-base font-medium text-white">Add To Cart</button>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2">
                <h3 className="text-base font-medium">{cardTitle}</h3>
                <div className={`flex gap-2 ${ratingInline ? "flex-row" : "flex-col"}`}>
                    <div className="flex gap-2">
                        <span className="text-base font-medium text-[#DB4444]">${netPrice}</span>
                        {totalPrice && <span className="text-base font-medium text-[#727272] line-through">${totalPrice}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <StarRating initialRating={rating} />
                        <span className="text-sm font-semibold text-[#727272]">({rateCount})</span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseCard;
