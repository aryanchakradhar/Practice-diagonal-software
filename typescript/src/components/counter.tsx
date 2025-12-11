import React from "react";
import { useCounter } from "../hook";

export default function Counter() {
  const {count, increaseCount, decreaseCount, resetcount} = useCounter();

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
          onClick={increaseCount}
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
          onClick={decreaseCount}
        >
          Decrease
        </button>
        <button
          style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
          onClick={resetcount}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
