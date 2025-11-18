import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
  };
  const DecreaseCount = () => {
    setCount(count - 1);
    if (count < 1) {
      setCount(0);
      alert("The counter cannot be less than 0");
    }
  };

  const ResetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          style={{
            border: "solid 1px black",
            color: "white",
            background: "green",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={IncreaseCount}
        >
          Increase
        </button>
        <button
          style={{
            border: "solid 1px black",
            color: "white",
            background: "red",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={DecreaseCount}
        >
          Decrease
        </button>
        <button
          style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={ResetCounter}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
