import React from "react";
import "./accordion.css";
import { useState } from "react";
import data from "../data/data";

function Accordion() {
  const [openId, setOpenId] = useState(null);
  const [openAll, setOpenAll] = useState(false);

  const handleShowText = (id) => {
    if (openAll) return;
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const handleOpenAll = () => {
    if (openAll) {
      setOpenAll(false);
      setOpenId(null);
    } else {
      setOpenAll(true);
    }
  };

  return (
    <div className="accordion">
      <h1>FAQ about agency</h1>
      <button className="multi-btn" onClick={handleOpenAll}>
        {openAll ? "Close all FAQ" : "Open all FAQ"}{" "}
      </button>
      {data && data.length > 0 ? (
        <div className="accordion-list">
          <ul className="accordion-list">
            {data.map((item) => (
              <li
                key={item.id}
                className="accordion-list_item"
                onClick={() => handleShowText(item.id)}
              >
                <div className="accordion-list_text-wrapper">
                  <h3 className="accordion-list_title">{item.q}</h3>
                  <span className="accordion-list_btn">+</span>
                </div>
                <div
                  className="accordion-list_second-text-wrapper"
                  style={{
                    display: openAll || openId === item.id ? "block" : "none",
                  }}
                >
                  <p className="accordion-list_second-text">{item.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No data is found!</div>
      )}
    </div>
  );
}

export default Accordion;
