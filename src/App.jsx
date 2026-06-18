import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/sections/LoadingScreen";
import "./index.css";
import { NavBar } from "./components/sections/NavBar";
import { MobileNavBar } from "./components/sections/MobileNavBar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bn-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileNavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
