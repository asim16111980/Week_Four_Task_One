// import { useContext } from "react";
// import { MenusContext } from "../context/MenusProvider";
// import { CircleX, Star, UserRound, LogOut, ShoppingBag } from "lucide-react";

// const AccountDropdown = () => {
//   const { state, dispatch } = useContext(MenusContext);
//   return (
//     <div className="size-full flex justify-center items-center p-5 rounded bg-black bg-opacity-5 text-neutral-50">
//       <ul className="flex flex-col gap-3">
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-4"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <UserRound />
//             <span className="font-poppins text-sm">Manage My Account</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-4"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <ShoppingBag />
//             <span className="font-poppins text-sm">My Order</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-4"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <CircleX />
//             <span className="font-poppins text-sm">My Cancellations</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-4"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <Star />
//             <span className="font-poppins text-sm">My Reviews</span>
//           </a>
//         </li>
//         <li>
//           <a
//             href="#"
//             className="flex items-center gap-4"
//             onClick={() => dispatch({ currentMenu: null })}
//           >
//             <LogOut />
//             <span className="font-poppins text-sm">Logout</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default AccountDropdown;

import { useContext } from "react";
import { MenusContext } from "../context/MenusProvider";
import { CircleX, Star, UserRound, LogOut, ShoppingBag } from "lucide-react";

const AccountDropdown = ({onClose}) => {
  const { openedMenu, setOpenedMenu } = useContext(MenusContext);

  const handleClickLink = () => {
    onClose();
  };

  return (
    <div className="absolute right-0 top-full mt-2 bg-white shadow-lg w-48 rounded-md p-3 z-30">
      <ul className="flex flex-col gap-3">
        <li>
          <a
            href="#"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
            onClick={() => {
              handleClickLink();
              // إضافة الكود المناسب للانتقال إلى صفحة "Manage My Account" إذا لزم الأمر
            }}
          >
            <UserRound />
            <span className="font-poppins text-sm">Manage My Account</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
            onClick={() => {
              handleClickLink();
              // إضافة الكود المناسب للانتقال إلى "My Order"
            }}
          >
            <ShoppingBag />
            <span className="font-poppins text-sm">My Orders</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
            onClick={() => {
              handleClickLink();
              // إضافة الكود المناسب للانتقال إلى "My Cancellations"
            }}
          >
            <CircleX />
            <span className="font-poppins text-sm">My Cancellations</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
            onClick={() => {
              handleClickLink();
              // إضافة الكود المناسب للانتقال إلى "My Reviews"
            }}
          >
            <Star />
            <span className="font-poppins text-sm">My Reviews</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded"
            onClick={() => {
              handleClickLink();
              // إضافة الكود المناسب للانتقال إلى "Logout"
            }}
          >
            <LogOut />
            <span className="font-poppins text-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountDropdown;
