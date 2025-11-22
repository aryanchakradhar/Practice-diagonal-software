import { BASE_URL } from "../form/URL";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useEffect } from "react";

export default function EditCrud({ isOpen, onClose,  editData }) {
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
      <h5>Edit Data</h5>
      <form onSubmit={handleSubmit(updateemp)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: { value: true, message: "this is required" },
            maxLength: { value: 150, message: "maximum value can 150" },
            minLength: { value: 5, message: "minimum value must be 5" },
          })}
          placeholder="Name"
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
        />
        {errors.address && <p>{errors.address.message}</p>}

        <input
          {...register("gmail", {
            required: { value: true, message: "this is required" },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          placeholder="Gmail"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <button type="submit" className="border-1  max-w-xs">
          submit
        </button>
      </form>
    </Modal>
  );
}
