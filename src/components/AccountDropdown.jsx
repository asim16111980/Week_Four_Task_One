import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { CircleX, Star, UserRound, LogOut, ShoppingBag } from "lucide-react";

const AccountDropdown = () => {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <div className="size-full flex justify-center items-center p-5 rounded bg-black bg-opacity-5 text-[#FAFAFA]">
      <ul className="flex flex-col gap-3">
        <li>
          <a
            href="#"
            className="flex items-center gap-4"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <UserRound />
            <span className="font-['Poppins'] text-sm">Manage My Account</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <ShoppingBag />
            <span className="font-['Poppins'] text-sm">My Order</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <CircleX />
            <span className="font-['Poppins'] text-sm">My Cancellations</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <Star />
            <span className="font-['Poppins'] text-sm">My Reviews</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4"
            onClick={() => dispatch({ currentMenu: null })}
          >
            <LogOut />
            <span className="font-['Poppins'] text-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;
