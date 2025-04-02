import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { getSectionData } from "../utils/fetchData";
import CategoryListItem from "./CategoryListItem";

const CategoriesList = ({  onClose }) => {
  const handleClickLink = () => {
    onClose();     
  };
  return (
    <div className="w-full h-auto px-2 md:gap-6 md:static text-black bg-white shadow md:block md:shadow-none">
      <ul className="flex flex-col bg-transparent md:gap-1">
        {getSectionData("Categories List").map((item) => {
          const hasNestedList = item.nested_list.length !== 0;
          return (
            <CategoryListItem
              key={item.id}
              name={item.name}
              href={item.href}
              hasNestedList={hasNestedList}
              onClick={
                !hasNestedList ? () =>handleClickLink() : null
              }
            >
              {hasNestedList && (
                <ul className="flex flex-col py-1">
                  {item.nested_list.map((nestedItem) => (
                    <CategoryListItem
                      onClick={() => () =>handleClickLink()}
                      key={nestedItem.id}
                      name={nestedItem.name}
                      href={nestedItem.href}
                      className="px-2"
                    />
                  ))}
                </ul>
              )}
            </CategoryListItem>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
