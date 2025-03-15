import BaseCard from "./BaseCard"

const DiscCard = ({ img, alt, discount, title, netPrice, totalPrice, rating, rateCount }) => {
    const badgeText = `-${discount}%`;
    return (
        <BaseCard cardImg={img} altText={alt} badge={badgeText} badgeBgColor={"bg-[#DB4444]"} cardTitle={title} netPrice={netPrice} totalPrice={totalPrice} rating={rating} rateCount={rateCount} />
    )
}

export default DiscCard