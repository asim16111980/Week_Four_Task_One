import { getSectionData } from "../utils/fetchData";
import CategoryListItem from "./CategoryListItem";

const CategoriesList = () => {
  return (
    <ul className="flex flex-col bg-transparent">
      {getSectionData("Carousel").map((item) => {
        const hasNestedList = item.nested_list.length !== 0;
        return (
          <CategoryListItem
            key={item.id}
            name={item.name}
            href={item.href}
            hasNestedList={hasNestedList}
          >
            {hasNestedList && (
              <ul className="flex flex-col gap-2">
                {item.nested_list.map((nestedItem) => (
                  <CategoryListItem
                    key={nestedItem.id}
                    name={nestedItem.name}
                    href={nestedItem.href}
                  />
                ))}
              </ul>
            )}
          </CategoryListItem>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
