import { useRef } from "react";
import "./Form.css";

export default function simpleForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}
