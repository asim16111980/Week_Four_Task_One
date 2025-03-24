import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationButtons = ({ prevId, NextId, style, sliderPosition }) => {
  return (
    <div className={`flex items-center p-2 gap-2 sm:w-28 ${style}`}>
      <button
        id={prevId}
        type="button"
        className={`size-10 flex justify-center items-center rounded-full ${
          sliderPosition === "start"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
            : "bg-[#F5F5F5] text-black hover:bg-[#D1D4DB]"
        }`}
        disabled={sliderPosition === "start"}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="text-lg sm:text-2xl" />
      </button>
      <button
        id={NextId}
        type="button"
        className={`size-10 flex justify-center items-center rounded-full ${
          sliderPosition === "end"
            ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
            : "bg-[#F5F5F5] text-black hover:bg-[#D1D4DB]"
        }`}
        disabled={sliderPosition === "end"}
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-lg sm:text-2xl" />
      </button>
    </div>
  );
};

export default NavigationButtons;
