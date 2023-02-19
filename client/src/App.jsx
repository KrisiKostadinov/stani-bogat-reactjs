import { useState, useEffect } from "react";
import { backgrounds } from "./data";
import "./App.css";

function App() {
  const [background, setBackground] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random(3) * 3);
    setBackground(backgrounds[index]);
  }, []);

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0">
        <img className="w-full h-full object-cover" src={background} alt="background" />
      </div>
    </>
  );
}

export default App;
