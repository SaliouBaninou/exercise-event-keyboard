import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [key, setKey] = useState(null);

  function handleKey(e) {
    setKey(e.key);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div>
      <p>Touche presser: {key ? key : "Auccune"}</p>
    </div>
  );
}

export default App;
