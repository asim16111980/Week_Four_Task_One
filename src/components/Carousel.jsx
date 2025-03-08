import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const handleChangeSlide = (e) => {
        const target = e.target;
        if (target.matches("li")) {
            setCurrentSlide(Number(target.id));
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev < 5 ? prev + 1 : 1));
        }, 2000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className="relative">
            <div className="size-full flex flex-col items-center bg-black py-3 gap-3">
                <div className="h-1/2 p-2">
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faApple} className="h-10 text-white" />
                        <span className='font-["Poppins"] text-[#fafafa] text-xs'>iPhone 14 Series</span>
                    </div>
                    <p className="text-xl text-[#fafafa] font-semibold mb-3">Up to 10% off Voucher</p>
                    <div className='font-["Poppins"] flex items-center gap-2 text-[#fafafa] text-xs'> <a href="/" className="underline underline-offset-4">Shop Now</a> <FontAwesomeIcon icon={faArrowRight} /></div>
                </div>
                <div className="h-1/2"><img src="../public/images/carousel/carousel_slide_1.png" alt="Carousel Slide 1" /></div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <ul className="flex items-center gap-4" onClick={(e) => handleChangeSlide(e)}>
                    {[1, 2, 3, 4, 5].map(slideNumber => (
                        <li key={slideNumber} id={slideNumber} className={`block size-3 rounded-full ${currentSlide === slideNumber ? "bg-[#DB4444] border-2 border-white" : "bg-[#7F7F7F]"}`}></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Carousel