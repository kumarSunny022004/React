import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisabled = false,
  currencyDisabled = false,
    className = ''
}) {
  const id = useId();
  return (
    <div className={` bg-white p-3 rouded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2" htmlFor={id}>
          {label}
        </label>
        <input
        id={id}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p>Currency type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={() => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}></option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
