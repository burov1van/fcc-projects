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
  const categorys = [
    "family",
    "office",
    "children",
    "college",
    "party",
    "funny",
    "unbelievable",
    "developers",
    "gaming",
  ];
  return (
    <div>
      {categorys.map((category, index) => (
        <button key={index} onClick={() => getExcuse(category)}>
          Execuse for {category}
        </button>
      ))}

      <p>{excuse}</p>
    </div>
  );
}
