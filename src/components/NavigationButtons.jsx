import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavigationButtons = () => {
    return (
        <div className="flex items-center gap-2">
            <button type="button" className="size-10 flex justify-center items-center bg-[#F5F5F5] text-black rounded-full hover:bg-[#D1D4DB] "><FontAwesomeIcon icon={faArrowLeft} className="text-lg" /></button>
            <button type="button" className="size-10 flex justify-center items-center bg-[#F5F5F5] text-black rounded-full  hover:bg-[#D1D4DB]"><FontAwesomeIcon icon={faArrowRight} className="text-lg" /></button>
        </div>
    )
}

export default NavigationButtons