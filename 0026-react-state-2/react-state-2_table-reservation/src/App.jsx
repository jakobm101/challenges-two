import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleCounter = ({target}) => {setPeople(people + (target['textContent'] === "+" ? 1 : -1))
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onClick={handleCounter}/>
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
