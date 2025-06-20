import { useState } from "react";

export const repeat = (n = 1, fn = () => console.log("U R an amazing chap")) => {
  for (let i = 0; i <= n; i++) fn();
}

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    repeat(
      3,
      setCount((c) => c + 1)
    );

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button
        type="button"
        className="counter__button"
        onClick={handleIncrement}
      >
        Increment count by 3
      </button>
    </div>
  );
}
