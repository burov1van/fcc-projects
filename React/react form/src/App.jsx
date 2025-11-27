import { Header } from "./Header.jsx";
import OTPGenerator from "./OTPGenerator.jsx";
import Timer from "./Timer.jsx";
import Form from "./Form.jsx";
import SimpleForm from "./SimpleForm.jsx";
import Counter from "./Counter.jsx";

import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <OTPGenerator />
      <Timer />
      <Form />
      <SimpleForm />
      <Counter />
    </>
  );
}

export default App;
