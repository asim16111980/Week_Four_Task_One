import Carousel from "../components/Carousel";
import FlashSaleTimer from "../components/FlashSaleTimer";
import NavigationButtons from "../components/NavigationButtons";
import SectionHeader from "../components/SectionHeader";
import DiscCard from "../components/DiscCard";
import Button from "../components/Button";
import { MenusContext } from "../context/MenusProvider";
import { useContext, useState } from "react";
import sectionsData from "../data/mockData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Divider from "../components/Divider";
import CategoryPhone from "../components/CategoryPhone";

const Home = () => {
  const { state, dispatch } = useContext(MenusContext);
  const [sliderPosition, setSliderPosition] = useState("start");
  const getSectionData = (sectionName) => {
    const section = sectionsData.find(
      (data) => data.sectionName === sectionName
    );
    return section ? section.sectionData : []; // بدلاً من null، نرجّع []
  };
  return (
    <div
      className="w-full h-screen"
      onClick={() => dispatch({ currentMenu: null })}
    >
      <Carousel />
      <div className="flex flex-col gap-8 py-4">
        <section className="flex flex-col items-center gap-3">
          <header className="flex flex-col items-center gap-3 px-2">
            <SectionHeader title="Today’s" subTitle="Flash Sales" />
            <FlashSaleTimer />
            <NavigationButtons
              prevId="flashPrevBtn"
              NextId="flashNextBtn"
              style="w-full justify-between"
              sliderPosition={sliderPosition}
            />
          </header>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper
              modules={[Navigation]}
              grabCursor={true}
              navigation={{ prevEl: "#flashPrevBtn", nextEl: "#flashNextBtn" }}
              onSlideChange={(swiper) => {
                setSliderPosition(
                  (swiper.isBeginning && "start") || (swiper.isEnd && "end")
                );
              }}
            >
              {getSectionData("Flash Sales").map((product) => (
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
          <Button filled={true} value="View All Products" />
        </section>
        <Divider thickness={0.5} />
        <section className="flex flex-col items-center gap-3">
          <header className="flex flex-col items-center gap-3 px-2">
            <SectionHeader title="Categories" subTitle="Browse By Category" />
            <NavigationButtons
              prevId="catsPrevBtn"
              NextId="catsNextBtn"
              style="w-full justify-between"
              sliderPosition={sliderPosition}
            />
          </header>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper
              modules={[Navigation]}
              grabCursor={true}
              navigation={{ prevEl: "#catsPrevBtn", nextEl: "#catsNextBtn" }}
              onSlideChange={(swiper) => {
                setSliderPosition(
                  (swiper.isBeginning && "start") || (swiper.isEnd && "end")
                );
              }}
            >
              {getSectionData("Category Phone").map((phone) => (
                <SwiperSlide key={phone.id}>
                  <CategoryPhone
                    img={`../public/icons/category_phone/${phone.img_src}`}
                    alt={phone.img_src}
                    name={phone.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <Divider thickness={0.5} />
      </div>
    </div>
  );
};

export default Home;
