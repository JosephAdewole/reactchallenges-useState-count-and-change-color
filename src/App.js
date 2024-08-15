import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <button id="button" onClick={countUp}>
        Increase the Count
      </button>
      <button id="button" onClick={countDown}>
        Decrease the Count
      </button>
      <h1 style={{ "background-color": count < 5 ? "blue" : "red" }}>
        Count is {count}
      </h1>
    </div>
  );
}
