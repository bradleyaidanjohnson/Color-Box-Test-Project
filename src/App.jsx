import { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox";
import InputField from "./InputField";

function App() {
  const [color, setColor] = useState("");
  const updateColor = (colorInput) => {
    setColor(colorInput);
  };

  return (
    <div>
      <ColorBox color={color} />
      <InputField color={color} updateColor={updateColor} />
    </div>
  );
}

export default App;
