import React from "react";
import { Link, Outlet } from "react-router-dom";
import Themebutton from "./context/Themebutton";


export default function Layout() {
  return (
    <div className="wholepage">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "15px",
          placeItems: "center",
        }}
        className="bg-white"
      >
        <Link to="/">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
            className="bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 border-black"
          >
            Counter
          </button>
        </Link>

        <Link to="/fetch">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
            className="bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 border-black"
          >
            Fetch
          </button>
        </Link>
        <Link to="/parent">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
            className="bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 border-black"
          >
            prop
          </button>
        </Link>
        <Link to="/form">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
            className="bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 border-black"
          >
            form
          </button>
        </Link>
        <Link to="/crud">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
           className="bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 border-black"
          >
            CRUD
          </button>
        </Link>
        <Themebutton />
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
