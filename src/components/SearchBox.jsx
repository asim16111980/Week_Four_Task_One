import Icon from "./Icon";
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="hidden flex-1 sm:block">
      <div className="size-full h-10 flex items-center justify-between rounded bg-[#F5F5F5] px-3">
        <input
          type="search"
          className="py-2 text-xs text-black bg-[#F5F5F5] focus:outline-0"
          placeholder="What are you looking for?"
        />
        <Icon icon={<IoSearchOutline />} className="size-4" />
      </div>
    </div>
  );
};

export default SearchBox;
