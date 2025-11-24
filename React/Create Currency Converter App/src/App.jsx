import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("RUB");
  const [info, setInfo] = useState([]);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState("0");

  useEffect(() => {
    axios
      .get(`https://open.er-api.com/v6/latest/${from.toUpperCase()}`)
      .then((res) => {
        setInfo(res.data.rates);
      })
      .catch((err) => console.log(err));
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
  }, [info]);

  useEffect(() => {
    if (!info[to] || !amount) return;
    const rate = info[to];
    const result = (amount * rate).toFixed(2);
    setOutput(result);
  }, [amount, to, info]);

  const handleConvert = () => {
    if (!info[to]) return;
    const rate = info[to];
    const result = (amount * rate).toFixed(2);
    setOutput(result);
  };

  return (
    <div className="App">
      <div className="converter">
        <div className="header">
          <img src="" alt="" />
          <h4>Currency Converter</h4>
        </div>
        <div className="countainer">
          <div className="left">
            <h4>Amount</h4>
            <input
              type="text"
              placeholder="Enter Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="middle">
            <h4>From</h4>
            <select onChange={(e) => setFrom(e.target.value)} value={from}>
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="right">
            <h4>To</h4>
            <select onChange={(e) => setTo(e.target.value)} value={to}>
              {options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="result">
            <h4>Conveter amount</h4>
            <h5>{amount + " " + from + " = " + output + " " + to}</h5>
          </div>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}
