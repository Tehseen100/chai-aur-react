import { FaExchangeAlt } from "react-icons/fa";

function SwapCurrencies({ from, setFrom, to, setTo }) {
  // swap currencies
  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div
      onClick={swapCurrencies}
      className="cursor-pointer flex items-center justify-center mb-[-38px] bg-slate-50 hover:bg-slate-100 p-3 transition-all ease-linear duration-300 rounded-full"
    >
      <FaExchangeAlt />
    </div>
  );
}

export default SwapCurrencies;
