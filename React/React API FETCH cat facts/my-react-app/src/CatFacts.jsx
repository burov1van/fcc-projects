import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Axios from "axios";

export default function CatFacts() {
  const [fact, setFact] = useState("");
  const [catPhoto, setCatPhoto] = useState("");

  const fetchCatData = async () => {
    const res = await Axios.get("https://catfact.ninja/fact");
    return res.data.fact;
  };

  const fetchCatPhoto = async () => {
    const res = await Axios.get("https://api.thecatapi.com/v1/images/search");
    const url = res.data[0].url;
    setCatPhoto(url);
  };

  const updateFact = useCallback(async () => {
    const newFact = await fetchCatData();
    setFact(newFact);

    await fetchCatPhoto();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateFact();
  }, [updateFact]);

  return (
    <div className="wrapper">
      <button className="cat-btn" onClick={updateFact}>
        give me new fact!
      </button>
      <p className="cat-facts">{fact}</p>
      <div>
        <img src={catPhoto} alt="" />
      </div>
    </div>
  );
}
