import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increase}>Increase Value</button>
      <button onClick={decrease}>Decrease Value</button>
    </>
  );
}

export default App;
