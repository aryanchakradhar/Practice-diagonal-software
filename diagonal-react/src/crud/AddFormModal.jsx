import { useForm } from "react-hook-form";
import { BASE_URL } from "../form/URL";
import Modal from "./Modal";

export default function FormModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addData = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data2 = await response.json();
      console.log(data2);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
       <h5>Add Data</h5>
      <form onSubmit={handleSubmit(addData)}>
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
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <button type="submit" className="border-1  max-w-xs">
          submit
        </button>
      </form>
    </Modal>
  );
}
