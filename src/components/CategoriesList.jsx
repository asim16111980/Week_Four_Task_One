import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { getSectionData } from "../utils/fetchData";
import CategoryListItem from "./CategoryListItem";

const CategoriesList = ({ className = "" }) => {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <div className={className}>
      <ul className="flex flex-col bg-transparent gap-3 md:gap-1">
        {getSectionData("Categories List").map((item) => {
          const hasNestedList = item.nested_list.length !== 0;
          return (
            <CategoryListItem
              key={item.id}
              name={item.name}
              href={item.href}
              hasNestedList={hasNestedList}
              onClick={
                !hasNestedList ? () => dispatch({ currentMenu: null }) : null
              }
            >
              {hasNestedList && (
                <ul className="flex flex-col py-1">
                  {item.nested_list.map((nestedItem) => (
                    <CategoryListItem
                      onClick={() => dispatch({ currentMenu: null })}
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
