import { BASE_URL } from "../form/URL";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useEffect } from "react";

export default function EditCrud({ isOpen, onClose, editData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const updateemp = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${editData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = response.json();
      console.log(result);
      reset({
        name: data.name,
        address: data.address,
        gmail: data.gmail,
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reset({
      name: editData.name,
      address: editData.address,
      gmail: editData.gmail,
    });
  }, [reset, editData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5 className="font-bold text-2xl">Edit Data</h5>
      <form
        onSubmit={handleSubmit(updateemp)}
        className="flex flex-col w-full mt-2 gap-5 place-content-around"
      >
        <label className="font-semibold">Name</label>
        <input
          {...register("name", {
            required: { value: true, message: "this is required" },
            maxLength: { value: 150, message: "maximum value can 150" },
            minLength: { value: 5, message: "minimum value must be 5" },
          })}
          placeholder="Name"
          className="h-10 border-1 rounded-xl p-1"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label className="font-semibold">Address</label>
        <input
          {...register("address", {
            required: { value: true, message: "this is required" },
            maxLength: { value: 150, message: "maximum value can 150" },
            minLength: { value: 5, message: "minimum value must be 5" },
          })}
          placeholder="Address"
          className="h-10 border-1 rounded-xl p-1"
        />
        {errors.address && <p>{errors.address.message}</p>}
        <label className="font-semibold">Gmail</label>
        <input
          {...register("gmail", {
            required: { value: true, message: "this is required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          placeholder="Gmail"
          className="h-10 border-1 rounded-xl p-1"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <button
          type="submit"
          className="border p-3 rounded-xl cursor-pointer font-semibold bg-purple-950 text-white hover:bg-purple-900"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
