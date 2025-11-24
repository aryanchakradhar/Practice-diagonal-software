import { useForm } from "react-hook-form";
import { BASE_URL } from "../form/URL";
import Modal from "./Modal";
import axios from "axios";
import { data } from "react-router-dom";


export default function FormModal({ isOpen, onClose, loading, setLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const addData = async (data) => {
   setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/users`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      onClose();
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
       <h5 className="font-bold text-2xl">Add Data</h5>
      <form onSubmit={handleSubmit(addData)} className="flex flex-col w-full gap-5 place-content-around">
        <label className="font-semibold">Name</label>
        <input
          {...register("name", {
            required: { value: true, message: "this is required" },
            maxLength: { value: 150, message: "maximum value can 150" },
            minLength: { value: 5, message: "minimum value must be 5" },
          })}
          placeholder="Name"
           className="h-10 border rounded-xl p-1"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Address</label>
        <input
          {...register("address", {
            required: { value: true, message: "this is required" },
            maxLength: { value: 150, message: "maximum value can 150" },
            minLength: { value: 5, message: "minimum value must be 5" },
          })}
          placeholder="Address"
           className="h-10 border rounded-xl p-1"
        />
        {errors.address && <p>{errors.address.message}</p>}
        <label>Gmail</label>
        <input
          {...register("gmail", {
            required: { value: true, message: "this is required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          placeholder="Gmail"
           className="h-10 border rounded-xl p-1"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <button type="submit" className="border p-3 rounded-xl cursor-pointer font-semibold bg-purple-950 text-white hover:bg-purple-900"
        disabled={loading}>
          Submit
        </button>
      </form>
    </Modal>
  );
}
