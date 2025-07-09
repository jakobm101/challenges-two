import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleForm(event) {
    const form = event.target;
    const data = new FormData(form);
    setName(data.get("name"));
    setEmail(data.get("email"));
    form.name.focus();
    form.reset();
  }

  return (
    <div className="container">
      <h1>⭐️ Personal Details Form</h1>
      <Form onClick={handleForm} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
