// import { useContext, useState } from "react";
// import {
//   X,
//   AlignJustify,
//   List,
//   UserRound,
//   Heart,
//   Search,
//   ShoppingCart,
// } from "lucide-react";
// import { IoHeartOutline } from "react-icons/io5";
// import MobileSearchBox from "./MobileSearchBox";
// import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
// import { MenusContext } from "../context/MenusProvider";
// import SearchBox from "./SearchBox";
// import CategoriesList from "./CategoriesList";
// import Nav from "./Nav";
// import AccountDropdown from "./AccountDropdown";

// const Header = () => {
//   const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
//     MobileSearchBoxContext
//   );
//   const [openedMenu, setOpenedMenu] = useContext(MenusContext);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="w-full h-auto sm:px-2 md:px-10 flex flex-col md:flex-row items-stretch justify-center shadow z-20 p-2 lg:px-8 bg-white">
//       <div className="w-full h-12 flex items-center lg:gap-10 xl:gap-24">
//         <h1 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
//           Exclusive
//         </h1>
//         {/* <Nav isOpen={isOpen} onClose={()=>setIsOpen(false)}/> */}
//         <div className="ml-auto flex items-center gap-2 lg:gap-6">
//           <button
//             type="button"
//             className="sm:hidden"
//             onClick={() => setIsMobileSearchBoxOpened(true)}
//           >
//             <Search />
//           </button>
//           <SearchBox />
//           <a href="/wishlist">
//             <IoHeartOutline className="lg:size-8" />
//           </a>
//           <button type="button">
//             <ShoppingCart className="lg:size-8" />
//           </button>
//           <div className="relative">
//             <button
//               type="button"
//               // className={`flex justify-center items-center ml-auto ${
//               //   state.UserMenuOpened
//               //     ? "bg-[#DB4444] text-white rounded-full p-1"
//               //     : "bg-transparent text-black rounded-none p-0"
//               // }`}
//               onClick={() => dispatch({ currentMenu: "UserMenuOpened" })}
//             >
//               <UserRound
//                 // className={`${
//                 //   state.UserMenuOpened ? "size-4 lg:size-6" : "size-6 lg:size-8"
//                 // }`}
//               />
//             </button>
//             <div
//               // className={`w-max h-auto rounded md:gap-6 absolute top-full mt-2 right-0 text-black bg-white transition-all duration-300 ease-in-out shadow ${
//               //   state.UserMenuOpened ? "block" : "hidden"
//               // }`}
//             >
//               <AccountDropdown />
//             </div>
//           </div>
//         </div>
//         {isMobileSearchBoxOpened && <MobileSearchBox />}
//       </div>
//       <div className="flex-1 flex items-center gap-2 py-2 md:hidden ">
//         <button
//           type="button"
//           className="flex justify-center items-center mr-auto"
//           onClick={() => setOpenedMenu("NavMenu")}
//         >
//           {openedMenu == "NavMenu" ? <X /> : <AlignJustify />}
//         </button>
//         {location.pathname === "/" && (
//           <button
//             type="button"
//             className="text-2xl flex justify-center items-center text-black sm:hidden"
//             onClick={() => dispatch({ currentMenu: "CatsMenuOpened" })}
//           >
//             {/* {state.CatsMenuOpened ? <X /> : <List />} */}
//           </button>
//         )}
//       </div>
//       <div
//         // className={`w-full sm:hidden h-auto px-2 md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow ${
//         //   state.CatsMenuOpened ? "block" : "hidden"
//         // }`}
//       >
//         <CategoriesList />
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useContext, useState } from "react";
import {
  X,
  AlignJustify,
  List,
  UserRound,
  Heart,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  IoHeartOutline,
  IoSearchOutline,
  IoCartOutline,
  IoClose,
  IoMenuOutline,
  IoList,
} from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import MobileSearchBox from "./MobileSearchBox";
import { MobileSearchBoxContext } from "../context/SearchBoxProvider";
import { MenusContext } from "../context/MenusProvider";
import SearchBox from "./SearchBox";
import CategoriesList from "./CategoriesList";
import Nav from "./Nav";
import AccountDropdown from "./AccountDropdown";
import Button from "./Button";

const Header = () => {
  const { isMobileSearchBoxOpened, setIsMobileSearchBoxOpened } = useContext(
    MobileSearchBoxContext
  );
  const { openedMenu, openMenu, closeMenu } = useContext(MenusContext); // هنا هنستخدم openMenu و closeMenu من MenusContext
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-auto sm:px-2 md:px-10 flex flex-col md:flex-row items-stretch justify-center shadow z-20 p-2 lg:px-8 bg-white">
      <div className="w-full h-12 flex items-center lg:gap-10 xl:gap-24">
        <h1 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
          Exclusive
        </h1>
        <div className="ml-auto flex items-center gap-2 lg:gap-6">
          <Button
            icon={<IoSearchOutline />}
            className="sm:hidden"
            onClick={() => setIsMobileSearchBoxOpened(true)}
          />
          {/* <button
            type="button"
            className="sm:hidden"
            onClick={() => setIsMobileSearchBoxOpened(true)}
          >
            <Search />
          </button> */}
          <SearchBox />
          <a href="/wishlist">
            <IoHeartOutline className="lg:size-8" />
          </a>
          <Button
            icon={<IoCartOutline />}
            className="lg:size-8"
            onClick={() => setIsMobileSearchBoxOpened(true)}
          />
          {/* <button type="button">
            <ShoppingCart className="lg:size-8" />
          </button> */}
          <div className="relative">
            <Button
              icon={<FiUser />}
              className="lg:size-8"
              onClick={() => openMenu("UserMenu")}
            />

            {/* <button
              type="button"
              onClick={() => openMenu("UserMenu")} 
            >
              <UserRound />
            </button> */}
            {openedMenu === "UserMenu" && <AccountDropdown />}
            {/* <div>
              <AccountDropdown />
            </div> */}
          </div>
        </div>
        {isMobileSearchBoxOpened && <MobileSearchBox />}
      </div>
      <div className="flex-1 flex items-center gap-2 py-2 md:hidden">
        <Button
          icon={openedMenu === "NavMenu" ? <IoClose /> : <IoMenuOutline />}
          className="lg:size-8"
          onClick={() =>
            openedMenu === "NavMenu" ? closeMenu() : openMenu("NavMenu")
          }
        />
        {/* <button
          type="button"
          className="flex justify-center items-center mr-auto"
          onClick={() =>
            openedMenu === "NavMenu" ? closeMenu() : openMenu("NavMenu")
          }
        >
          {openedMenu === "NavMenu" ? <X /> : <AlignJustify />}
        </button> */}
        {location.pathname === "/" &&
          (<Button
            icon={<IoList />}
            className="text-2xl flex justify-center items-center text-black sm:hidden"
            onClick={() => openMenu("CatsMenu")}
          />)(
            <button
              type="button"
              className="text-2xl flex justify-center items-center text-black sm:hidden"
              onClick={() => openMenu("CatsMenu")} // هنا بنفتح الـ CatsMenu
            >
              {/* لو هنحتاج نعرض أو نخفي الزر هنا بناءً على حالة CatsMenu */}
            </button>
          )}
      </div>
      <div>
        <CategoriesList />
      </div>
    </header>
  );
};

export default Header;
