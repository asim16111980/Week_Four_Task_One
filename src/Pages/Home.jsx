import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import NavigationButtons from "../components/NavigationButtons";
import SectionTitle from "../components/SectionTitle";
import DiscCard from "../components/DiscCard";
import Button from "../components/Button";
import Divider from "../components/Divider";
import CategoryPhone from "../components/CategoryPhone";
import { MenusContext } from "../context/MenusProvider";
import { useContext, useState } from "react";
import sectionsData from "../data/mockData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
            <SectionTitle title="Today’s" subTitle="Flash Sales" />
            <Timer type="flat"  initialTimer={{ days: 4, hours: 0, minutes: 0, seconds: 0 }}/>
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
              {getSectionData("Flash Sales").map((item) => (
                <SwiperSlide key={item.id}>
                  <DiscCard
                    img={`../public/images/flash_sales/${item.img_src}`}
                    alt={item.img_src}
                    name={item.name}
                    discount={item.discount}
                    netPrice={item.net_price}
                    totalPrice={item.total_price}
                    rating={item.rating}
                    rateCount={item.rate_count}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Button value="View All Products" width="234" />
        </section>
        <Divider thickness={0.5} />
        <section className="flex flex-col items-center gap-3">
          <header className="flex flex-col items-center gap-3 px-2">
            <SectionTitle title="Categories" subTitle="Browse By Category" />
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
              {getSectionData("Category Phone").map((item) => (
                <SwiperSlide key={item.id}>
                  <CategoryPhone
                    img={`../public/icons/category_phone/${item.img_src}`}
                    alt={item.img_src}
                    name={item.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <Divider thickness={0.5} />
        <section className="flex flex-col items-center gap-3">
          <header className="flex flex-col items-center gap-3 px-2">
            <SectionTitle title="This Month" subTitle="Best Selling Products" />
            <Button  value="View All" width="159" />
            <NavigationButtons
              prevId="bestPrevBtn"
              NextId="bestNextBtn"
              style="w-full justify-between"
              sliderPosition={sliderPosition}
            />
          </header>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper
              modules={[Navigation]}
              grabCursor={true}
              navigation={{ prevEl: "#bestPrevBtn", nextEl: "#bestNextBtn" }}
              onSlideChange={(swiper) => {
                setSliderPosition(
                  (swiper.isBeginning && "start") || (swiper.isEnd && "end")
                );
              }}
            >
              {getSectionData("Best Selling").map((item) => (
                <SwiperSlide key={item.id}>
                  <DiscCard
                    img={`../public/images/best_selling/${item.img_src}`}
                    alt={item.img_src}
                    name={item.name}
                    discount={item.discount}
                    netPrice={item.net_price}
                    totalPrice={item.total_price}
                    rating={item.rating}
                    rateCount={item.rate_count}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="w-full bg-black">
          <span className="font-['poppins'] text-base font-semibold text-[#00FF66]">
            Categories
          </span>
          <h2 className="text-5xl font-semibold text-[#FAFAFA]">
            Enhance Your Music Experience
          </h2>
          <Timer
            type="rounded"
            initialTimer={{ days: 6, hours: 0, minutes: 0, seconds: 0 }}
          />
          <Button isPrimary={false }  value="Buy Now!" width="171"/>
        </section>
      </div>
    </div>
  );
};

export default Home;
