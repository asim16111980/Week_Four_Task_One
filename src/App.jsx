import "./App.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import { SearchBoxProvider } from "./context/SearchBoxProvider";
import { MenusProvider } from "./context/MenusProvider";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <SearchBoxProvider>
          <MenusProvider>
            <TopHeader />
            <Header />
            <Divider className="hidden sm:block" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </MenusProvider>
        </SearchBoxProvider>
      </Router>
    </>
  );
}

export default App;
