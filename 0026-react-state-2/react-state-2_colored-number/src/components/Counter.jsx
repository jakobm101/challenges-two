import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  // const handleClick = () => setValue(value + 1);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          // onClick={handleClick("+")}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          // onClick={handleClick("-")}
        >
          -
        </button>
      </div>
    </div>
  );
}
