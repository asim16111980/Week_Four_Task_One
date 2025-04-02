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

const Menu = ({ isOpen, onClose,  children }) => {
  const menuRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target)) {
  //       menuRef.current.classList.add("hidden"); // إخفاء القائمة عند الضغط خارجها
  //       onClose(); // نغلق القائمة منطقيًا
  //     }
  //   };

  //   if (isOpen) {
  //     menuRef.current.classList.remove("hidden"); // إظهار القائمة عند الفتح
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     menuRef.current.classList.add("hidden");
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isOpen, onClose]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose(); // ✅ التأكد من تنفيذ `onClose` عند الضغط خارج القائمة
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute w-full top-0 left-0 z-20 bg-white" onClose={onClose} // مخفي في البداية
    >
      {children}
    </div>
  );
};

export default Menu;

