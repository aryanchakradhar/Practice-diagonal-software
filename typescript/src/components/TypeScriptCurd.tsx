import { useState } from "react";
import { FaBrush, FaSearch, FaTrash } from "react-icons/fa";
import { useGetUserList } from "../hook";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function TypeScriptCurd() {
  const { data, isLoading } = useGetUserList();
  console.log(typeof data, data);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>();
  const [isdeleteOpen, setIsDeleteOpen] = useState(false);

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <>
      <div className="flex m-3 justify-around items-center">
        <h1 className="text-2xl font-bold">Manage Employees</h1>
        <button
          className=" bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 p-3 border rounded-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Add Employees
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
        <FaSearch className="absolute right-5 top-22" />
      </div>
      <table className=" table-fixed border border-collapse w-full">
        <tr className="sticky top-0 border bg-purple-900 text-white text-l ">
          <th className=" border">Name</th>
          <th className=" border">Address</th>
          <th className=" border">Gmail</th>

          <th>Action</th>
        </tr>

        {data &&
          data.map((item) => {
            const addresses = Object.values(item.address);
            return (
              <tr key={item.id} className="border w-100 odd:bg-gray-300 even:bg-white">
                <td className=" border  w-1/4 truncate overflow-hidden whitespace-nowrap">
                  {item.name}
                </td>
                <td className=" border w-1/4  whitespace-wrap">
                  {addresses.map((address, index) => {
                  return <span key={index}>{address.address1} {index < addresses.length - 1 ? ", " : ""}</span>;
                  })}
                </td>
                <td className=" border w-1/4 truncate overflow-hidden whitespace-nowrap">
                  {item.gmail}
                </td>
                <td className="flex justify-center">
                  <button
                    onClick={() => {
                      setId(item.id);
                      setIsEditOpen(true);
                    }}
                    className="flex place-content-around items-center odd:bg-white hover:bg-black hover:text-white p-2 m-2 border w-20 rounded-xl cursor-pointer"
                  >
                    Edit <FaBrush />
                  </button>
                  <button
                    onClick={() => {
                      setId(item.id);
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
      <AddButton isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {id && (
        <EditButton
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          id={id}
        />
      )}
      {id && (
        <DeleteButton
          isOpen={isdeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          id={id}
        />
      )}
    </>
  );
}
