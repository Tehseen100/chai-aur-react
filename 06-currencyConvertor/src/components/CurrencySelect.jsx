function CurrencySelect({ id, label, value, onChange, currencies }) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="outline-none border p-1"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;
