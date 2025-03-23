import "./App.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import Home from "./Pages/Home";
import { SearchBoxProvider } from "./context/SearchBoxProvider";
import { MenusProvider } from "./context/MenusProvider";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <>
      <SearchBoxProvider>
        <MenusProvider>
          <TopHeader />
          <Header />
          <Divider className="hidden sm:block"/>
          <Home />
          <Footer />
        </MenusProvider>
      </SearchBoxProvider>
    </>
  );
}

export default App;
