import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [values, setValues] = useState({
    firstname: "",
    email: "",
    number: 0,
    dietary: "",
    guests: false,
  });

  const [formText, setFormText] = useState("");

  const hadleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
RSVP Submitted!
Name: ${values.firstname}
Email: ${values.email}
Number of attendees: ${values.number}
Dietary preferences: ${values.dietary || "None"}
Bringing additional guests: ${values.guests ? "Yes" : "No"}
`;

    setFormText(message);
  };
  return (
    <div className="form-wrapper">
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          required
          placeholder="Enter first your name"
          name="firstname"
          value={values.firstname}
          onChange={hadleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={hadleChange}
        />

        <label htmlFor="number">Number of Attendees:</label>
        <input
          type="number"
          id="number"
          required
          placeholder="Numbers of attendees"
          name="number"
          value={values.number}
          onChange={hadleChange}
        />

        <label htmlFor="dietary">Dietary Preferences:</label>
        <input
          type="text"
          id="dietary"
          placeholder="Dietary preference(Optional)"
          name="dietary"
          value={values.dietary}
          onChange={hadleChange}
        />

        <div className="checkbox-wrapper">
          <label htmlFor="guests">Bringing additional guests?</label>
          <input
            type="checkbox"
            id="guests"
            name="guests"
            checked={values.guests}
            onChange={hadleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="form-text">{formText}</p>
    </div>
  );
}
