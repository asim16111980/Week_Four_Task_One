import { useContext } from "react";
import {
  X,
  AlignJustify,
  List,
  UserRound,
  Heart,
  Search,
  ShoppingCart,
} from "lucide-react";
import MobileSearchBox from "./MobileSearchBox";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import { MenusContext } from "../context/MenusProvider";
import SearchBox from "./SearchBox";
import CategoriesList from "./CategoriesList";
import Nav from "./Nav";
import AccountDropdown from "./AccountDropdown";

const Header = () => {
  const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
    MobileSearchBoxContext
  );
  const { state, dispatch } = useContext(MenusContext);

  return (
    <header className="w-full h-auto sm:px-2 md:px-10 flex flex-col md:flex-row items-stretch justify-center relative shadow z-20 p-2 lg:px-8 bg-white">
      <div className="w-full h-12 flex items-center lg:gap-10 xl:gap-24">
        <h1 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
          Exclusive
        </h1>
        <nav
          className={`w-full h-auto px-2 md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow md:block md:shadow-none ${
            state.NavMenuOpened ? "block" : "hidden"
          }`}
        >
          <Nav />
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:gap-6">
          <button
            type="button"
            className="sm:hidden"
            onClick={() => setIsMobileSearchBoxOpened(true)}
          >
            <Search />
          </button>
          <SearchBox />
          <button type="button">
            <Heart className="lg:size-8" />
          </button>
          <button type="button">
            <ShoppingCart  className="lg:size-8"/>
          </button>
          <div className="relative">
            <button
              type="button"
              className={`flex justify-center items-center ml-auto ${
                state.UserMenuOpened
                  ? "bg-[#DB4444] text-white rounded-full p-1"
                  : "bg-transparent text-black rounded-none p-0"
              }`}
              onClick={() => dispatch({ currentMenu: "UserMenuOpened" })}
            >
              <UserRound
                className={`${state.UserMenuOpened ? "size-4 lg:size-6" : "size-6 lg:size-8"}`}
              />
            </button>
            <div
              className={`w-max h-auto rounded md:gap-6 absolute top-full mt-2 right-0 text-black bg-white transition-all duration-300 ease-in-out shadow ${
                state.UserMenuOpened ? "block" : "hidden"
              }`}
            >
              <AccountDropdown />
            </div>
          </div>
        </div>
        {isMobileSearchBoxOpened && <MobileSearchBox />}
      </div>
      <div className="flex-1 flex items-center gap-2 py-2 md:hidden ">
        <button
          type="button"
          className="flex justify-center items-center mr-auto"
          onClick={() => dispatch({ currentMenu: "NavMenuOpened" })}
        >
          {state.NavMenuOpened ? <X /> : <AlignJustify />}
        </button>
        {location.pathname === "/" && (
          <button
            type="button"
            className="text-2xl flex justify-center items-center text-black sm:hidden"
            onClick={() => dispatch({ currentMenu: "CatsMenuOpened" })}
          >
            {state.CatsMenuOpened ? <X /> : <List />}
          </button>
        )}
      </div>
      <div
        className={`w-full sm:hidden h-auto px-2 md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow ${
          state.CatsMenuOpened ? "block" : "hidden"
        }`}
      >
        <CategoriesList />
      </div>
    </header>
  );
};

export default Header;
