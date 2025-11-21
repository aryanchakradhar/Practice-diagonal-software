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
          margin: "15px",
          placeItems: "center",
        }}
      >
        <Link to="/">
          <button
            style={{
              border: "solid 1px black",
              borderRadius: "5px",
              padding: "10px",
            }}
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
          >
            form
          </button>
        </Link>

        <Themebutton />
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
