import { useState, useEffect } from "react";
import Home from "./Componentes/Home";
import Fondo from "./Layout/Fondo";
import CVButton from "./Componentes/CVButton";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "" : "light";
  }, [darkMode]);

  return (
    <>
      <Fondo darkMode={darkMode} />
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      <CVButton />
    </>
  );
}

export default App;
