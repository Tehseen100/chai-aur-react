import { useState } from "react";
import useCurrencyRates from "./hooks/useCurrencyRates";
import { AmountInput, CurrencySelect, SwapCurrencies } from "./components";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");

  const { rates, isLoading, error } = useCurrencyRates(from);

  // converted amount
  const convertedAmount = rates[to] ? (amount * rates[to]).toFixed(2) : "";

  // currencies
  const currencies = Object.keys(rates);

  return (
    <div className="w-full h-screen bg-[#675AFF] flex items-center justify-center">
      <div id="container" className="bg-white p-8 ">
        <h1 className="text-2xl font-mono font-semibold mb-6">
          Currency Converter
        </h1>

        <AmountInput amount={amount} setAmount={setAmount} />

        <div className="flex items-center justify-between">
          <CurrencySelect
            id="from"
            label="From"
            value={from}
            onChange={setFrom}
            currencies={currencies}
          />

          <SwapCurrencies from={from} setFrom={setFrom} to={to} setTo={setTo} />

          <CurrencySelect
            id="to"
            label="To"
            value={to}
            onChange={setTo}
            currencies={currencies}
          />
        </div>

        {!error && (
          <h4 className="mt-6">
            {isLoading && "Loading..."}
            {!isLoading &&
              `${amount.toFixed(2)} ${from} = ${convertedAmount} ${to}`}
          </h4>
        )}
      </div>
    </div>
  );
}

export default App;
