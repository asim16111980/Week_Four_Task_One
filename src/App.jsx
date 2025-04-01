// import "./App.css";
// import { useCallback, useContext, useEffect } from "react";
// import { MenusContext } from "./context/MenusProvider";
// import TopHeader from "./components/TopHeader";
// import Header from "./components/Header";
// import Menus from "./components/Menus";
// import Footer from "./components/Footer";
// import Divider from "./components/Divider";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import SignUp from "./Pages/SignUp";
// import WishList from "./Pages/WishList";

// function App() {
//   const [openedMenu, setOpenedMenu] = useContext(MenusContext);
//   // const handleClickOutside = useCallback((event) => {
//   //   dispatch({ currentMenu: null }); // إغلاق جميع القوائم
//   // }, [dispatch]);

//   // useEffect(() => {
//   //   document.addEventListener("mousedown", handleClickOutside);
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   };
//   // }, [handleClickOutside]);
//   return (
//     <>
//       <TopHeader />
//       <Header />
//       <Divider className="hidden sm:block" />
//       <div className="relative">
//         <Menus openedMenu={openedMenu} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<SignUp />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/wishlist" element={<WishList />} />
//         </Routes>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import { useContext } from "react";
import { MenusContext } from "./context/MenusProvider";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import WishList from "./Pages/WishList";

function App() {
  const { openedMenu, openMenu, closeMenu } = useContext(MenusContext);

  return (
    <>
      <TopHeader />
      <Header openMenu={openMenu} />
      <Divider className="hidden sm:block" />
      <Menus />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

