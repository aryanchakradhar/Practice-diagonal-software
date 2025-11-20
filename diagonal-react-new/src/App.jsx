
import Counter from "./counter/Counter";
import "./App.css";
import FetchData from "./fetchdata/FetchData";
import Parent from "./propdrilling/Parent";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
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
            style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          Counter
        </button>
        <button
            style={{
            border: "solid 1px black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          ToDo
        </button>
        <button
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

       <Counter data={data} />
       <FetchData />
      <Parent username = {username}/>
      <RouterProvider router = {router}/>
    </>
  );
}
