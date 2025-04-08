import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { getSectionData, calNetPrice } from "../utils/fetchData";
import SectionTitle from "../components/SectionTitle";
import { IoEyeOutline, IoTrashOutline, IoCartOutline } from "react-icons/io5";

const WishList = ({ WishListCount }) => {
  const [wishListProducts, setWishListProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => setWishListProducts(response.data.products))
      .catch((error) => console.log("Error fetching products:", error));
  }, []);
    console.log("test");
  return (
    <div className="w-full flex flex-col gap-20 md:gap-40 py-10">
      <section className="w-full flex flex-col items-center gap-14 md:gap:30">
        <header className="w-full flex flex-col sm:flex-row  justify-between items-center gap-2">
          <h2>
            Wishlist <span>({WishListCount})</span>
          </h2>
          <Button
            value="Move All To Bag"
            className="w-56 h-14 bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50 rounded"
          />
        </header>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {wishListProducts.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                cardImg={item.images[0]}
                altText={item.images[0]}
                headerIcons={[<IoTrashOutline />]}
                buttonIcon={<IoCartOutline className="size-6" />}
                cardTitle={item.title}
                hasBadge={true}
                badgeBgColor="bg-[#DB4444]"
                discount={item.discountPercentage}
                isRatingInline={true}
                netPrice={calNetPrice(item.price, item.discountPercentage)}
                totalPrice={item.price}
              />
            );
          })}
          {/* {getSectionData("Our Products 1").map((item, index) => {
            return (
              <ProductCard
                key={index}
                id={item.id}
                cardImg={`images/our_products/${item.img_src}`}
                altText={item.img_src}
                headerIcons={[<IoTrashOutline />]}
                buttonIcon={<IoCartOutline className="size-6"/>}
                cardTitle={item.name}
                hasBadge={true}
                discount={item.discount}
                isRatingInline={true}
                netPrice={item.net_price}
                rating={item.rating}
                rateCount={item.rate_count}
              />
            );
          })} */}
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <SectionTitle title="Just For You" />
          <Button
            value="See All"
            className="bg-transparent border border-black border-opacity-50 text-black hover:text-opacity-50 rounded"
          />
        </header>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {getSectionData("Our Products 1").map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              cardImg={`images/our_products/${item.img_src}`}
              altText={item.img_src}
              headerIcons={[<IoEyeOutline />]}
              buttonIcon={<IoCartOutline />}
              cardTitle={item.name}
              hasBadge={true}
              discount={item.discount}
              isRatingInline={true}
              netPrice={item.net_price}
              rating={item.rating}
              rateCount={item.rate_count}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WishList;
