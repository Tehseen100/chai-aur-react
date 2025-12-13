import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const btnColors = ["red", "green", "blue", "olive", "black"];

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {btnColors.map((colorName) => {
            return (
              <button
                key={colorName}
                onClick={() => setColor(colorName)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: colorName }}
              >
                {colorName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
