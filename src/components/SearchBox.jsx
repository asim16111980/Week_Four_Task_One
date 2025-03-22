import Icon from "./Icon";

const SearchBox = () => {
  return (
    <div className="hidden sm:block">
      <div className="w-60 h-10 flex items-center justify-between rounded bg-[#F5F5F5] px-3">
        <input
          type="search"
          className="py-2 text-xs text-black bg-[#F5F5F5] focus:outline-0"
          placeholder="What are you looking for?"
        />
        <Icon icon="/public/icons/header/search.png" alt="Search" />
      </div>
    </div>
  );
};

export default SearchBox;
