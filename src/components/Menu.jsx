import { useEffect, useRef } from "react";

const Menu = ({ isOpen, onClose, children }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && <div className="block absolute w-full h-screen  z-30 bg-gray-400" onClick={onClose}></div>}
      {/* <div ref={menuRef} className={`z-20 bg-white ${isOpen ? "block" : "hidden"}`}> 
         {children}
      </div> */}
    </>
  );
};

export default Menu;
