import React, { useEffect, useState } from "react";
import { BASE_URL } from "./URL";

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gmail, setGmail] = useState("");
  const [dob, setDob] = useState("");
  const [avataar, setAvataar] = useState("");

  const handleSubmit= async(e) => {
    e.preventDefault();  

    try {
        const response = await fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,address,gmail,dob,avataar}),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center min-w-2xs justify-between h-100 "
    >
      <label>Name:</label>
      <input
        type="text"
        className="border-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Address:</label>
      <input
        type="text"
        className="border-1"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></input>

      <label>Gmail:</label>
      <input
        type="text"
        className="border-1"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
      ></input>

      <label>DOB:</label>
      <input
        type="text"
        className="border-1"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      ></input>

      <label>Avataar:</label>
      <input
        type="text"
        className="border-1"
        value={avataar}
        onChange={(e) => setAvataar(e.target.value)}
      ></input>
      <button type="submit" className="border-1  max-w-xs">
        submit
      </button>
    </form>
  );
}
