import React, { useMemo, useState } from "react";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PLN");

  const currencys = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
    CHF: 0.88,
    CAD: 1.37,
    AUD: 1.54,
    CNY: 7.26,
    SEK: 10.55,
    PLN: 4.03,
  };

  const currArr = Object.keys(currencys);

  const convertedMap = useMemo(() => {
    const rateFrom = currencys[from];
    const numericAmount = Number(amount) || 0;
    const result = {};

    currArr.forEach((code) => {
      const rateTo = currencys[code];
      const converted = rateFrom
        ? (numericAmount * (rateTo / rateFrom)).toFixed(2)
        : "0.00";
      result[code] = converted;
    });

    return result;
  }, [amount, from]);

  const result = convertedMap[to] || "0.00";

  return (
    <div className="converter">
      <div className="converter-headie">
        <h1 className="converter-title">Currency Converter</h1>
      </div>

      <div className="converter-input-wrapper">
        <label htmlFor="amount" className="label-conversion">
          USD to EUR Conversion
        </label>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          name="amount"
          id="amount"
        />
      </div>

      <div className="converter-input-wrapper">
        <label className="label-currency" htmlFor="from">
          Start Currency:
        </label>
        <select
          name="from"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {currArr.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      <div className="converter-input-wrapper">
        <label className="label-currency" htmlFor="to" id="to">
          Target Currency:
        </label>
        <select
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {currArr.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      <div className="converter-result">
        <p className="converter-result_text">
          Converted Amount: {result} {to}
        </p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
