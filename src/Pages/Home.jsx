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
import { useState } from "react";
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
  const [sliderPosition, setSliderPosition] = useState("start");

  return (
    <div className="w-full flex flex-col gap-24 sm:px-2 md:px-10 pb-4">
      {/* Carousel Section */}
      <section className="flex gap-6">
        <CategoriesList className="hidden sm:block w-48 mt-10 max-h-full" />
        <Divider type="vr" className="hidden sm:block" />
        <Carousel images={images} />
      </section>
      {/* Flash Sales Section */}
      <section className="flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col justify-between sm:flex-row sm:items-end items-center gap-2">
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
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
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
        <Button value="View All Products" className="w-60"/>
      </section>
      <Divider thickness={0.5} />
      {/* Category Phone Section */}
      <section className="flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col justify-between sm:flex-row sm:items-end items-center gap-2">
          <SectionTitle title="Categories" subTitle="Browse By Category" />
          <NavigationButtons
            prevId="catsPrevBtn"
            NextId="catsNextBtn"
            style="w-full justify-between"
            sliderPosition={sliderPosition}
          />
        </header>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              570: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              868: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1124: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
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
                  name={item.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Divider thickness={0.5} />
      {/* Best Selling Section */}
      <section className="flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col justify-between sm:flex-row sm:items-end items-center gap-2">
          <SectionTitle title="This Month" subTitle="Best Selling Products" />
          <Button value="View All" className="w-36" />
        </header>
        <div className="w-full mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            grabCursor={true}
          >
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
      <section className="w-full flex flex-col items-center sm:flex-row bg-black px-3 md:px-10 py-6 md:py-0">
        <div className="h-1/2 sm:w-1/2 flex flex-col items-center sm:items-start gap-6 md:gap-10">
          <span className="font-['poppins'] text-sm md:text-base font-semibold text-[#00FF66]">
            Categories
          </span>
          <h2 className="text-2xl md:text-5xl font-semibold text-center sm:text-left text-[#FAFAFA]">
            Enhance Your Music Experience
          </h2>
          <Timer
            type="rounded"
            initialTimer={{ days: 6, hours: 0, minutes: 0, seconds: 0 }}
          />
          <Button isPrimary={false} value="Buy Now!" className="w-36" />
        </div>
        <div className="h-1/2 sm:w-1/2 relative flex items-center justify-center bg-black">
          <div className="w-full aspect-square rounded-full bg-[#D9D9D9] bg-opacity-30 filter blur-[70px] md:blur-[130px]"></div>
          <img
            src="/public/images/JBL_BOOMBOX_2_HERO_020_x1.png"
            alt="Enhance Image"
            className="w-9/12 absolute"
          />
        </div>
      </section>
      {/* Our Products Section */}
      <section className="flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col justify-between sm:flex-row sm:items-end items-center gap-2">
          <SectionTitle title="Our Products" subTitle="Explore Our Products" />
          <NavigationButtons
            prevId="productPrevBtn"
            NextId="productNextBtn"
            style="w-full justify-between"
            sliderPosition={sliderPosition}
          />
        </header>
        <div className="max-w-full flex flex-col items-center gap-14">
          <div className="w-full mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
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
          <div className="w-full mx-auto">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
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
        <Button value="View All Products" className="w-60" />
      </section>
      {/* New Arrival Section */}
      <section className="flex flex-col items-center gap-8 md:gap:10">
        <header className="w-full flex flex-col justify-between sm:flex-row sm:items-end items-center gap-2">
          <SectionTitle title="Featured" subTitle="New Arrival" />
        </header>
        <div
          className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  
                md:[&>*:nth-child(1)]:col-span-2 md:[&>*:nth-child(1)]:row-span-2 
                md:[&>*:nth-child(2)]:col-span-2 
               "
        >
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
      <section className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 lg:gap-8">
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
  );
};

export default Home;
