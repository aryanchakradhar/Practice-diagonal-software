import React, { useEffect, useState } from "react";
import "./FetchData.module.css";

export default function FetchData() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const tableData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    tableData();
  }, []);

  console.log({ info });

  return (
    <>
      <h1>Data from the api</h1>
      {/* <button onClick={tableData}>Touch me</button> */}
      {info.map((item) => {
        return (
          <ul>
            <li> {item.userId}</li>
            <li> {item.id}</li>
            <li> {item.title}</li>
            <li> {item.completed}</li>
          </ul>
        );
      })}
    </>
  );
}
