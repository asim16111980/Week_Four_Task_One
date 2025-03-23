import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import MobileSearchBox from "./MobileSearchBox";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import { MenusContext } from "../context/MenusProvider";
import SearchBox from "./SearchBox";
import CategoriesList from "./CategoriesList";

const Header = () => {
  const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
    MobileSearchBoxContext
  );
  const { state, dispatch } = useContext(MenusContext);

  return (
    <header className="w-full h-auto flex flex-col lg:flex-row items-stretch justify-center relative shadow z-20 p-2 lg:px-8">
      <div className="h-12 flex items-center px-2 lg:gap-10 xl:gap-24">
        <h1 className="font-bold text-black text-lg md:text-2xl">Exclusive</h1>
        <nav
          className={`w-full h-auto px-2 md:gap-6 absolute lg:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow lg:block lg:shadow-none ${
            state.NavMenuOpened ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col bg-transparent lg:flex-row lg:gap-6 text-sm md:text-base ">
            <li className="p-2   cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="p-2   cursor-pointer">
              <a href="/contact">Contact</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="p-2 cursor-pointer">
              <a href="/signup"></a>Sign Up
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-6">
          <button
            type="button"
            className="sm:hidden"
            onClick={() => setIsMobileSearchBoxOpened(true)}
          >
            <Icon icon="/public/icons/header/search.png" alt="Search" />
          </button>
          <SearchBox />
          <button type="button">
            <Icon icon="/public/icons/header/wishlist.svg" />
          </button>
          <button type="button">
            <Icon icon="/public/icons/header/cart.svg" />
          </button>
        </div>
        {isMobileSearchBoxOpened && <MobileSearchBox />}
      </div>
      <div className="flex-1 flex items-center gap-2 py-2 lg:hidden ">
        <button
          type="button"
          className="w-8 h-8 text-xl text-black mr-auto"
          onClick={() => dispatch({ currentMenu: "NavMenuOpened" })}
        >
          <FontAwesomeIcon icon={state.NavMenuOpened ? faTimes : faBars} />
        </button>
        {/* <button type='button'><Icon icon="/public/icons/IUser.svg" /></button> */}
        <button
          type="button"
          className="w-8 h-8 text-xl text-black md:hidden"
          onClick={() => dispatch({ currentMenu: "CatsMenuOpened" })}
        >
          <FontAwesomeIcon icon={state.CatsMenuOpened ? faTimes : faThLarge} />
        </button>
          </div>
          <div
      className={`w-full h-auto px-2 md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow ${
        state.CatsMenuOpened ? "block" : "hidden"
      }`}
    >
     <CategoriesList/> </div>
    </header>
  );
};

export default Header;
