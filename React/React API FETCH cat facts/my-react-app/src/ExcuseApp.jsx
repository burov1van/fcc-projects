import React, { useState } from "react";
import axios from "axios";

export default function ExcuseApp() {
  const [excuse, setExcuse] = useState("");
  const getExcuse = async (category) => {
    const res = await axios.get(
        `https://excuser-three.vercel.app/v1/excuse/${category}/`
      );
    const text = res.data[0]?.excuse;
    setExcuse(text);
  };

  return (
    <div>
      <button onClick={() => getExcuse("family")}>Family</button>
      <button onClick={() => getExcuse("office")}>Office</button>
      <button onClick={() => getExcuse("children")}>Children</button>
      <p>{excuse}</p>
    </div>
  );
}
