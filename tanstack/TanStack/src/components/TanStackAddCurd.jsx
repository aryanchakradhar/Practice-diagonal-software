import { useForm } from "react-hook-form";
import { BASE_URL } from "../form/url";
import Modal from "./Modal";
import { useCreateuser } from "../hooks";

export default function TanStackAddCurd({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
     reset,
    formState: { errors },
  } = useForm();

  const createMutation = useCreateuser();
  const Submit = (data) => {
    createMutation.mutate(
      data,
      {
        onSuccess: () => {
          alert("success");
           reset();
          onClose();
         
        },
      },

      {
        onError: () => {
          alert("failed");
        },
      }
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5 className="font-bold text-2xl">Add Data</h5>
      <form
        onSubmit={handleSubmit(Submit)}
        className="flex flex-col w-full gap-5 place-content-around"
      >
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

        <button
          type="submit"
          className="border p-3 rounded-xl cursor-pointer font-semibold bg-purple-950 text-white hover:bg-purple-900"
        disabled={createMutation.isPending}>
          Submit
        </button>
      </form>
    </Modal>
  );
}
