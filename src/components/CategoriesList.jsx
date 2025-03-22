import Icon from "./Icon";

const CategoriesList = () => {
  return (
      <ul className="flex flex-col bg-transparent">
        <li className="p-2 text-sm cursor-pointer flex items-center justify-between">
          <a href="/">Woman’s Fashion</a>
          <button type="button" className="*:-rotate-90">
            <Icon icon="/public/icons/dropdown.png" alt="DropDown" />
          </button>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer flex items-center justify-between">
          <a href="/">Men’s Fashion</a>
          <button type="button" className="*:-rotate-90">
            <Icon icon="/public/icons/dropdown.png" alt="DropDown" />
          </button>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Electronics</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Home & Lifestyle</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Medicine</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Sports & Outdoor</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Baby’s & Toys</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Groceries & Pets</a>
        </li>
        <li className="p-2 md:py-0 text-sm cursor-pointer">
          <a href="/">Health & Beauty</a>
        </li>
      </ul>
  );
};

export default CategoriesList;
