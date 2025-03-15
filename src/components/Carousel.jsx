import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "../public/images/carousel/carousel_slide_1.png",
  "../public/images/carousel/carousel_slide_1.png",
  "../public/images/carousel/carousel_slide_1.png",
  "../public/images/carousel/carousel_slide_1.png",
  "../public/images/carousel/carousel_slide_1.png",
];

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true, horizontalClass: "pagination", bulletClass: "bullet", bulletActiveClass: "bullet-active" }}
        grabCursor={true}
        speed={800}

      // className="relative [&_.swiper-pagination-bullet]:!size-3 [&_.swiper-pagination-bullet]:!bg-[#7F7F7F] [&_.swiper-pagination-bullet-active]:!bg-[#DB4444] [&_.swiper-pagination-bullet-active]:!border-2 [&_.swiper-pagination-bullet-active]:!border-white"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="size-full flex flex-col items-center bg-black py-3 gap-3">
              <div className="h-1/2 p-2">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={faApple} className="h-10 text-white" />
                  <span className='font-["Poppins"] text-[#fafafa] text-xs'>
                    iPhone 14 Series
                  </span>
                </div>
                <p className="text-xl text-[#fafafa] font-semibold mb-3">
                  Up to 10% off Voucher
                </p>
                <div className='font-["Poppins"] flex items-center gap-2 text-[#fafafa] text-xs'>
                  <a href="/" className="underline underline-offset-4">
                    Shop Now
                  </a>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
              <div className="h-1/2">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
