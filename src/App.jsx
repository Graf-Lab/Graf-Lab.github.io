import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { NavBar } from "./components/NavBar";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bn-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={menuOpen} />
        <MobileNavBer menuOpen={menuOpen} setMenuOpen={menuOpen} />
      </div>
    </>
  );
}

export default App;
