import React, { useEffect, useState } from "react";
import { BASE_URL } from "../form/URL";
import AddCrud from "./AddCrud";
import { Link } from "react-router-dom";
import FormModal from "./AddFormModal";
import EditCrud from "./EditCrud";

export default function Crud() {
  const [info, setInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const data = await response.json();
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(info);

  console.log({ editData });
  return (
    <>
      <div>
        <h2>Manage Employees</h2>
        {/* <Link to="/addcrud">
          {" "}
          <button>Add Employees</button>{" "}
        </Link> */}
        <button onClick={() => setIsOpen(true)}>Add Employee</button>
      </div>
      <table>
        <th>Name</th>
        <th>Address</th>
        <th>Gmail</th>

        <th>Action</th>

        {info.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.gmail}</td>
              <td>
                <button
                  onClick={() => {
                    console.log(item)
                    setEditData(item);

                    setIsEditOpen(true);
                  }}
                >
                  edit
                </button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <EditCrud isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} editData={editData}/>
    </>
  );
}
