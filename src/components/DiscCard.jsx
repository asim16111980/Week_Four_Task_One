import BaseCard from "./BaseCard"

const DiscCard = ({ img, alt, discount, name, netPrice, totalPrice, rating, rateCount }) => {
    const badgeText = discount && `-${discount}%`;
    return (
        <BaseCard cardImg={img} altText={alt} badge={badgeText} badgeBgColor={"bg-[#DB4444]"} cardTitle={name} netPrice={netPrice} totalPrice={totalPrice} rating={rating} rateCount={rateCount} />
    )
}

export default DiscCard