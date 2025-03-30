import { useContext } from "react";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import Icon from "./Icon";

const MobileSearchBox = () => {
  const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
    MobileSearchBoxContext
  );
  return (
    <div
      className={`absolute inset-0 bg-white  ${
        isMobileSearchBoxOpened ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full flex items-center gap-1 p-1">
        <button type="button" onClick={() => setIsMobileSearchBoxOpened(false)}>
          {" "}
          <Icon icon="/icons/header/arrowLeft.svg" />{" "}
        </button>
        <input
          type="search"
          className="flex-1 h-full text-sm text-black placeholder:text-[#A0A3BD] border-2 rounded-3xl px-3 outline-0 bg-[#D9DBE9]"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
};

export default MobileSearchBox;
