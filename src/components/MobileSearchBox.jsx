import { useContext } from "react";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import Icon from "./Icon";
import { IoArrowBack } from "react-icons/io5";

const MobileSearchBox = () => {
  const { setIsMobileSearchBoxOpened } = useContext(MobileSearchBoxContext);
  return (
    <div className="absolute inset-0 z-10 bg-white w-full h-full flex items-center gap-1 p-1">
      <Icon
        icon={<IoArrowBack />}
        onClick={() => setIsMobileSearchBoxOpened(false)}
      />
      <input
        type="search"
        className="flex-1 h-full text-sm text-black placeholder:text-[#A0A3BD] border-2 rounded-3xl px-3 outline-0 bg-[#D9DBE9]"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default MobileSearchBox;
