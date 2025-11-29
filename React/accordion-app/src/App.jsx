import Accordion from "./components/accordion/Accordion";
import "./App.css";
import StarRating from "./components/starrating/StarRating";

function App() {
  return (
    <div className="main-wrapper">
      <Accordion />
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
