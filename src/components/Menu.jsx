// import { useEffect, useRef } from "react";

// const Menu = ({ isOpen, onClose, children }) => {
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <>
    
//       {/* <div ref={menuRef} className={`z-20 bg-white ${isOpen ? "block" : "hidden"}`}>
//          {children}
//       </div> */}
//     </>
//   );
// };

// export default Menu;

import React, { useEffect, useRef } from "react";

const Menu = ({ isOpen, onClose, children }) => {
  const menuRef = useRef(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // إغلاق القائمة
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className={`z-20 bg-white ${isOpen ? "block" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default Menu;

