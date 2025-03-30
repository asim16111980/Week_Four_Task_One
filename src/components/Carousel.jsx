import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ images = [] }) => {
  return (
    <>
      <Swiper
        className="h-fit md:h-96 sm:w-3/5 md:flex-1 mt-10"
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          horizontalClass: "pagination",
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active",
        }}
        grabCursor={true}
        speed={800}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} >
            <div className="size-full flex flex-col md:flex-row items-center justify-center bg-black py-3 md:px-4 lg:px-6 gap-6">
              <div className="flex-[50%] p-2">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={faApple} className="h-10 text-white" />
                  <span className='font-["Poppins"] text-[#fafafa] text-xs lg:text-base'>
                    iPhone 14 Series
                  </span>
                </div>
                <p className="text-xl md:text-2xl lg:text-5xl text-[#fafafa] font-semibold mb-3">
                  Up to 10% off Voucher
                </p>
                <div className='font-["Poppins"] flex items-center gap-2 text-[#fafafa] text-xs lg:text-base'>
                  <a href="/" className="underline underline-offset-4">
                    Shop Now
                  </a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
              <div className="flex-[50%]">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
