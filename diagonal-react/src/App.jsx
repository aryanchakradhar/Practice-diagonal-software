import { useState } from "react";
import Counter from "./counter/Counter";
import "./App.css";
import FetchData from "./fetchdata/FetchData";
import Parent from "./propdrilling/Parent";

export default function App() {
  const [page, setPage] = useState("counter");
  const data = "something useful";
  const username = "Aryan";

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "15px",
        }}
      >
        <button
          onClick={() => setPage("counter")}
          style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Counter
        </button>
        <button
          onClick={() => setPage("fetchdata")}
          style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          ToDo
        </button>
        <button
          onClick={() => setPage("propdrilling")}
          style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          prop
        </button>
      </nav>

      <hr />

      {page === "counter" && <Counter data={data} />}
      {page === "fetchdata" && <FetchData />}
      {page === "propdrilling" && <Parent username = {username}/>}
    </>
  );
}
