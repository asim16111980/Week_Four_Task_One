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

import { useEffect, useRef } from "react";

const Menu = ({ isOpen, onClose, children }) => {
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   if (!isOpen) return; 

  //   const handleClickOutside = (e) => {
  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(e.target)
  //     ) {
  //       // onClose(); 
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen]); // كده `useEffect` هيشتغل بس لما `isOpen` يتغير

  return (
    <div
      // ref={menuRef}
      className="absolute w-full top-0 left-0 z-20 bg-white"
      onClose={onClose} // مخفي في البداية
    >
      {children}
    </div>
  );
};

export default Menu;
