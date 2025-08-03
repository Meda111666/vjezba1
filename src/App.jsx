import NavbarComponent from "./components/NavbarComponent";
import "./index.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />
        <Outlet />
      </div>
    </>
  );
}

export default App;
