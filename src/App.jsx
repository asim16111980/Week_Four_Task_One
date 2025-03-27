import "./App.css";
import { useContext } from "react";
import { MenusContext } from "./context/MenusProvider";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";

function App() {
  const { state, dispatch } = useContext(MenusContext);
  return (
    <>
      <TopHeader />
      <Header />
      <Divider className="hidden sm:block" />
      <div onClick={() => dispatch({ currentMenu: null })}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
