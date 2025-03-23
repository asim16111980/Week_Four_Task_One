import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

const CategoryListItem = ({ name, href, hasNestedList = false, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const contentRef = useRef(null); // 🔹 مرجع لتحديد طول القائمة الفرعية

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpened
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpened]);

  return (
    <li className="relative text-sm sm:text-base cursor-pointer flex flex-col">
      <div
        className={`flex items-center justify-between p-1 cursor-pointer 
                   hover:bg-[#F4F4F6] transition-colors duration-300 ${
                     isOpened ? "bg-[#F7F7FC] rounded-t-md" : ""
                   }`}
      >
        <a href={href} className="flex-1">
          {name}
        </a>
        {hasNestedList && (
          <button
            type="button"
            className="transition-transform duration-300 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpened((prev) => !prev);
            }}
            tabIndex="-1"
          >
            <Icon
              icon="/icons/dropdown.png"
              className={`transition-transform duration-300 ${
                isOpened ? "rotate-180" : "rotate-0"
              }`}
              style={{ pointerEvents: "none" }}
            />
          </button>
        )}
      </div>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out rounded-b-md overflow-hidden max-h-0 bg-[#F7F7FC] gap-1 w-full absolute top-full left-0 z-10"
      >
        {children}
      </div>
    </li>
  );
};

export default CategoryListItem;
