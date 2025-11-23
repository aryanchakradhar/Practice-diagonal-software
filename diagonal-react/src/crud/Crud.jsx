import React, { useEffect, useState } from "react";
import { BASE_URL } from "../form/URL";
import { data, Link } from "react-router-dom";
import FormModal from "./AddFormModal";
import EditCrud from "./EditCrud";
import DeleteCrud from "./DeleteCrud";
import { FaBrush } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { Pagination } from "./Pagination";

export default function Crud() {
  const [info, setInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [isdeleteOpen, setIsDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        setInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

    const totalPages = Math.ceil (info.length / itemsPerPage);

    const currentData = info.slice((currentPage-1) * itemsPerPage, currentPage *itemsPerPage)

  return (
    <>
      <div className="flex m-3 justify-around items-center">
        <h1 className="text-2xl font-bold">Manage Employees</h1>

        <button
          onClick={() => setIsOpen(true)}
          className=" bg-purple-950 text-white  hover:text-gray-200 hover:bg-purple-900 p-3 border rounded-2xl cursor"
        >
          Add Employee
        </button>
      </div>
      <table className=" border border-collapse w-full">
            <tr  className="sticky top-0 border bg-purple-900 text-white text-l ">
            <th  className=" border">Name</th>
            <th className=" border">Address</th>
            <th className=" border">Gmail</th>

            <th>Action</th>
          </tr>
      
        {currentData.map((item) => {
          return (
            <tr className="border w-100 odd:bg-gray-300 even:bg-white">
              <td className=" border" >{item.name}</td>
              <td className=" border" >{item.address}</td>
              <td className=" border" >{item.gmail}</td>
              <td className="flex justify-center">
                <button
                  onClick={() => {
                    console.log(item);
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
                  Delete <FaTrash  />
                </button>
              </td>
            </tr>
          );
        })}
      
      </table>
          <Pagination 
        totalPages ={totalPages}
        currentPage = {currentPage}
        onPageChange = {setCurrentPage} />


      <FormModal isOpen={isOpen} onClose={() => setIsOpen(false)} setLoading={setLoading} loading = {loading} />
      <EditCrud
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        editData={editData}
        setLoading={setLoading} loading={loading}
      />
      <DeleteCrud
        isOpen={isdeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        editData={editData}
        setLoading={setLoading} loading={loading}
      />
    </>
  );
}
