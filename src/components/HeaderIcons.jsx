import { useContext } from "react";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import { MenusContext } from "../context/MenusProvider";
import Icon from "./Icon";
import {
  IoHeartOutline,
  IoSearchOutline,
  IoCartOutline,
} from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import MobileSearchBox from "./MobileSearchBox";
import SearchBox from "./SearchBox";
import AccountDropdown from "./AccountDropdown";
import { getValue } from "../utils/storage";

const HeaderIcons = () => {
  const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
    MobileSearchBoxContext
  );

  const [openedMenu, setOpenedMenu] = useContext(MenusContext);
  const toggleMenu = (menu) => {
    openedMenu === menu ? setOpenedMenu(null) : setOpenedMenu(menu);
  };

  const token = getValue("accessToken");

  return (
    <div className="ml-auto sm:flex-1 flex items-center gap-2 md:gap-4 lg:gap-6">
      <Icon
        icon={<IoSearchOutline />}
        className="size-4 sm:hidden"
        onClick={() => setIsMobileSearchBoxOpened(true)}
      />
      {isMobileSearchBoxOpened && <MobileSearchBox />}
      <SearchBox />
      <Icon
        type="link"
        href={token ? "/wishlist" : "/login"}
        icon={<IoHeartOutline />}
        className="size-4"
      />
      <Icon
        type="link"
        href={token ? "/cart" : "/login"}
        icon={<IoCartOutline />}
        className="size-4"
      />
      <div className="relative">
        <Icon
          icon={<FiUser />}
          className="size-4"
          onClick={() => {
            toggleMenu("UserMenu");
          }}
        />
        {openedMenu === "UserMenu" && (
          <AccountDropdown onClose={() => setOpenedMenu(null)} />
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
