import Carousel from "../components/Carousel";
import Timer from "../components/Timer";
import NavigationButtons from "../components/NavigationButtons";
import SectionTitle from "../components/SectionTitle";
import DiscCard from "../components/DiscCard";
import Button from "../components/Button";
import Divider from "../components/Divider";
import CategoryPhone from "../components/CategoryPhone";
import FlatCard from "../components/FlatCard";
import BlackCard from "../components/BlackCard";
import ServiceCard from "../components/ServiceCard";
import CategoriesList from "../components/CategoriesList";
import { MenusContext } from "../context/MenusProvider";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getSectionData } from "../utils/fetchData";

const images = [
  "/public/images/carousel/carousel_slide_1.png",
  "/public/images/carousel/carousel_slide_1.png",
  "/public/images/carousel/carousel_slide_1.png",
  "/public/images/carousel/carousel_slide_1.png",
  "/public/images/carousel/carousel_slide_1.png",
];

const Home = () => {
  const { state, dispatch } = useContext(MenusContext);
  const [sliderPosition, setSliderPosition] = useState("start");
 
  return (
    <div className="w-full" onClick={() => dispatch({ currentMenu: null })}>
       {/* Carousel Section */}
      <section className="flex gap-6">
        <CategoriesList />
        <Divider type="vr" />
        <Carousel images={images} />
      </section>
      <div className="flex flex-col gap-12 py-4">
        {/* Flash Sales Section */}
        <section className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-2 px-2">
            <SectionTitle title="Today’s" subTitle="Flash Sales" />
            <Timer
              type="flat"
              initialTimer={{ days: 4, hours: 0, minutes: 0, seconds: 0 }}
            />
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
                    img={`/public/images/flash_sales/${item.img_src}`}
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
        {/* Category Phone Section */}
        <section className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-2 px-2">
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
                    img={`/public/icons/category_phone/${item.img_src}`}
                    alt={item.img_src}
                    name={item.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <Divider thickness={0.5} />
        {/* Best Selling Section */}
        <section className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-2 px-2">
            <SectionTitle title="This Month" subTitle="Best Selling Products" />
            <Button value="View All" width="159" />
          </header>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper modules={[Navigation]} grabCursor={true}>
              {getSectionData("Best Selling").map((item) => (
                <SwiperSlide key={item.id}>
                  <DiscCard
                    img={`/public/images/best_selling/${item.img_src}`}
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
        {/*  Enhance Music Section */}
        <section className="w-full flex flex-col bg-black px-3 py-6">
          <div className="flex flex-col items-center gap-6">
            <span className="font-['poppins'] text-base font-semibold text-[#00FF66]">
              Categories
            </span>
            <h2 className="text-4xl font-semibold text-center text-[#FAFAFA]">
              Enhance Your Music Experience
            </h2>
            <Timer
              type="rounded"
              initialTimer={{ days: 6, hours: 0, minutes: 0, seconds: 0 }}
            />
            <Button isPrimary={false} value="Buy Now!" width="171" />
          </div>
          <div className="relative flex items-center justify-center bg-black">
            <div className="w-full aspect-square rounded-full bg-[#D9D9D9] bg-opacity-30 filter blur-[70px]"></div>
            <img
              src="/public/images/JBL_BOOMBOX_2_HERO_020_x1.png"
              alt="Enhance Image"
              className="w-10/12 absolute"
            />
          </div>
        </section>
        {/* Our Products Section */}
        <section className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-2 px-2">
            <SectionTitle
              title="Our Products"
              subTitle="Explore Our Products"
            />
            <NavigationButtons
              prevId="productPrevBtn"
              NextId="productNextBtn"
              style="w-full justify-between"
              sliderPosition={sliderPosition}
            />
          </header>
          <div className="max-w-full flex flex-col items-center gap-14">
            <div className="w-full max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation]}
                grabCursor={true}
                navigation={{
                  prevEl: "#productPrevBtn",
                  nextEl: "#productNextBtn",
                }}
                onSlideChange={(swiper) => {
                  setSliderPosition(
                    (swiper.isBeginning && "start") || (swiper.isEnd && "end")
                  );
                }}
              >
                {getSectionData("Our Products 1").map((item) => (
                  <SwiperSlide key={item.id}>
                    <DiscCard
                      img={`/public/images/our_products/${item.img_src}`}
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
            <div className="w-full max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation]}
                grabCursor={true}
                navigation={{
                  prevEl: "#productPrevBtn",
                  nextEl: "#productNextBtn",
                }}
                onSlideChange={(swiper) => {
                  setSliderPosition(
                    (swiper.isBeginning && "start") || (swiper.isEnd && "end")
                  );
                }}
              >
                {getSectionData("Our Products 2").map((item) => (
                  <SwiperSlide key={item.id}>
                    <FlatCard
                      id={item.id}
                      img={`/public/images/our_products/${item.img_src}`}
                      alt={item.img_src}
                      isNew={item.isNew}
                      name={item.name}
                      netPrice={item.net_price}
                      rating={item.rating}
                      rateCount={item.rate_count}
                      productColorOptions={item.colors}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Button value="View All Products" width="234" />
        </section>
        {/* New Arrival Section */}
        <section className="flex flex-col items-center gap-8">
          <header className="flex flex-col items-center gap-2 px-2">
            <SectionTitle title="Featured" subTitle="New Arrival" />
          </header>
          <div className="flex flex-col items-center gap-2">
            {getSectionData("New Arrival").map((item) => (
              <BlackCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                img={`/public/images/new_arrival/${item.img_src}`}
                alt={item.img_src}
              />
            ))}
          </div>
        </section>
        {/* Services Section */}
        <section className="flex flex-col items-center gap-12">
          {getSectionData("Services").map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              img={`/public/icons/services/${item.img_src}`}
              alt={item.img_src}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
