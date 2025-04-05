import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import {
  FiUser,
  FiShoppingBag,
  FiXCircle,
  FiStar,
  FiLogOut,
} from "react-icons/fi";

const AccountDropdown = ({ onClose }) => {
  const { openedMenu, setOpenedMenu } = useContext(MenusContext);

  const handleClickLink = () => {
    onClose();
  };

  const items = [
    { label: "Manage My Account", href: "#", icon: <FiUser /> },
    { label: "My Orders", href: "#", icon: <FiShoppingBag /> },
    { label: "My Cancellations", href: "#", icon: <FiXCircle /> },
    { label: "My Reviews", href: "#", icon: <FiStar /> },
    { label: "Logout", href: "#", icon: <FiLogOut /> },
  ];
  return (
    <div className="w-max absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 z-30">
      <ul className="flex flex-col gap-1">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
              onClick={() => {
                handleClickLink();
              }}
            >
              {item.icon}
              <span className="font-poppins text-sm">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountDropdown;
