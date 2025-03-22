import { useState } from "react";
import Icon from "./Icon";

const CategoryListItem = ({ name, href, hasNestedList = false,children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <li className="p-2 text-sm cursor-pointer flex flex-col items-stretch" onClick={() => setIsOpened((prev) => !prev)}>
          <div className="flex items-center justify-between">  
          <a href={href}>{name}</a>
      {hasNestedList && (
          <button
          type="button"
          className={`${!isOpened && "*:-rotate-90"}`}
          >
          <Icon icon="/public/icons/dropdown.png" />
        </button>
          )}
          </div>
          {isOpened && children}
      </li>
  );
};

export default CategoryListItem;
