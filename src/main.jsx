import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchBoxProvider } from "./context/SearchBoxProvider";
import { MenusProvider } from "./context/MenusProvider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <SearchBoxProvider>
        <MenusProvider>
          <App />
        </MenusProvider>
      </SearchBoxProvider>
    </Router>
  </StrictMode>
);
