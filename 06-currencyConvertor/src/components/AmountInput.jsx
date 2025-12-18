function AmountInput({ amount, setAmount }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="input">Enter Amount</label>
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        type="number"
        id="input"
        className="outline-none border p-2 mt-1"
      />
    </div>
  );
}

export default AmountInput;
