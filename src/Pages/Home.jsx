import Carousel from "../components/Carousel";
import FlashSaleTimer from "../components/FlashSaleTimer";
import NavigationButtons from "../components/NavigationButtons";
import SectionHeader from "../components/SectionHeader";
import DiscCard from "../components/DiscCard";
import { MenusContext } from "../context/MenusProvider";
import { useContext } from "react";
import productsData from "../data/mockData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <div
      className="w-full h-screen"
      onClick={() => dispatch({ currentMenu: null })}
    >
      <Carousel />
      <div className="flex flex-col gap-8 py-4">
        <section>
          <header className="flex flex-col items-center gap-3 px-2">
            <SectionHeader title="Today’s" subTitle="Flash Sales" />
            <FlashSaleTimer />
            <NavigationButtons prevId="prevBtn" NextId="nextBtn" style="w-full justify-between"/>
          </header>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper modules={[Navigation]} grabCursor={true} navigation={{prevEl:"#prevBtn",nextEl:"#nextBtn"}}>
              {productsData.map((product) => (
                <SwiperSlide key={product.id}>
                  <DiscCard
                    img={`../public/images/flash_sales/${product.img_src}`}
                    alt={product.img_src}
                    name={product.name}
                    discount={product.discount}
                    netPrice={product.net_price}
                    totalPrice={product.total_price}
                    rating={product.rating}
                    rateCount={product.rate_count}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
