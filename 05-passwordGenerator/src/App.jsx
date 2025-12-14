import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "123456789";
    let chars = "!@#$%&*()+=:<>/?|{;]}[";

    if (numbersAllowed) str += numbers;
    if (charsAllowed) str += chars;

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  };

  const copyPassword = () => {
    if (!password) return;

    setIsCopied(true);
    window.navigator.clipboard.writeText(password);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      className="w-full h-screen bg-white py-8 flex items-center justify-center sm:pt-20 sm:block"
      style={{ color: "#3971C4" }}
    >
      <div className="max-w-lg mx-auto p-6 sm:py-6 sm:px-10 border-2 shadow-md">
        <h1 className="text-3xl font-semibold text-center">
          Password Generator
        </h1>

        <div className="mt-10 w-full">
          <input
            value={password}
            className="w-[80%] border-2 border-[#3971C4] outline-none px-2 py-2 text-lg font-medium text-[#3971C4] placeholder-[#3971C4] placeholder:font-normal placeholder-opacity-80 rounded-l-md"
            type="text"
            readOnly
            placeholder="Password"
          />
          <button
            disabled={!password}
            onClick={copyPassword}
            className="w-[20%] disabled:cursor-not-allowed bg-[#3971C4] border-2 border-[#3971C4] text-lg text-white px-2 py-2 rounded-r-md"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex items-center gap-2 w-full mt-8">
          <label htmlFor="length" className="w-[30%] sm:w-[20%] text-black">
            Length: {length}
          </label>
          <input
            onChange={(e) => setLength(() => Number(e.target.value))}
            type="range"
            min={4}
            max={32}
            value={length}
            id="length"
            className="w-[70%] sm:w-[80%]"
          />
        </div>

        <div className="w-full flex items-center justify-between mt-4">
          <label htmlFor="chars" className="text-black cursor-pointer">
            Use special characters
          </label>
          <input
            type="checkbox"
            checked={charsAllowed}
            onChange={(e) => setCharsAllowed(e.target.checked)}
            id="chars"
            className="cursor-pointer"
          />
        </div>

        <div className="w-full flex items-center justify-between mt-4">
          <label htmlFor="numbers" className="text-black cursor-pointer">
            Use special numbers
          </label>
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={(e) => setNumbersAllowed(e.target.checked)}
            id="numbers"
            className="cursor-pointer"
          />
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-[#3971C4] text-white mt-8 p-2 text-lg rounded-md hover:bg-[#507dc1] transition ease-linear duration-300"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
