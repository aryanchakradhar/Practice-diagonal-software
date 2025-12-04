import React, { useState } from "react";
import { FaBrush } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import TanStackAddCurd from "./TanStackAddCurd";
import TanStackEditCrud from "./TanStackEditCurd";
import TanStackDeleteCrud from "./TanStackDeleteCurd";
import { useGetUserList } from "../hooks";

export default function TanStackCrud() {
  const { data, isLoading } = useGetUserList();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [isdeleteOpen, setIsDeleteOpen] = useState(false);

  if (isLoading) return <>Loading ....</>;
  if (!data) return <>No Data</>;

  return (
    <>
      <div className="flex m-3 justify-around items-center">
        <h1 className="text-2xl font-bold">Manage Employees</h1>

        <button
          className=" bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 p-3 border rounded-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Add Employee
        </button>
      </div>
      <div className="flex mb-1 p-2 justify-between">
        <label>
          Show data:
          <select className="border ml-1 rounded-lg">
            currentData
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="search"
          className="border rounded-lg p-1 pr-8 w-100 relative"
        />
        <FaSearch className="absolute right-5 top-42" />
      </div>
      <table className=" table-fixed border border-collapse w-full">
        <tr className="sticky top-0 border bg-purple-900 text-white text-l ">
          <th className=" border">Name</th>
          <th className=" border">Address</th>
          <th className=" border">Gmail</th>

          <th>Action</th>
        </tr>

        {data.map((item) => {
          return (
            <tr className="border w-100 odd:bg-gray-300 even:bg-white">
              <td className=" border  w-1/4 truncate overflow-hidden whitespace-nowrap">
                {item.name}
              </td>
              <td className=" border w-1/4 truncate overflow-hidden whitespace-nowrap">
                {item.address}
              </td>
              <td className=" border w-1/4 truncate overflow-hidden whitespace-nowrap">
                {item.gmail}
              </td>
              <td className="flex justify-center">
                <button
                  onClick={() => {
                    setEditData(item);
                    setIsEditOpen(true);
                  }}
                  className="flex place-content-around items-center odd:bg-white hover:bg-black hover:text-white p-2 m-2 border w-20 rounded-xl cursor-pointer"
                >
                  Edit <FaBrush />
                </button>
                <button
                  onClick={() => {
                    setEditData(item);
                    setIsDeleteOpen(true);
                  }}
                  className="flex place-content-around items-center p-2 m-2 border w-20 rounded-xl even:bg-white hover:bg-black hover:text-white cursor-pointer"
                >
                  Delete <FaTrash />
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <TanStackAddCurd isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <TanStackEditCrud
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        editData={editData}
      />
      <TanStackDeleteCrud
        isOpen={isdeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        editData={editData}
      />
    </>
  );
}
