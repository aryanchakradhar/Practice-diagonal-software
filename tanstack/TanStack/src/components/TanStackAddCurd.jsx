import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import { useCreateuser } from "../hooks";

export default function TanStackAddCurd({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const createMutation = useCreateuser();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const Submit = (data) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        alert("success");
        reset();
        setPreview(null);
        onClose();
      },
      onError: () => {
        alert("failed");
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5 className="font-bold text-2xl mb-4">Add Employee</h5>
      <form onSubmit={handleSubmit(Submit)} className="flex flex-col gap-4">
        <label className="font-semibold">Name</label>
        <input
          {...register("name", {
            required: "This is required",
            maxLength: { value: 150, message: "Maximum 150 characters" },
            minLength: { value: 5, message: "Minimum 5 characters" },
            setValueAs: (value) => value.trim(),
          })}
          placeholder="Name"
          className="h-10 border rounded-xl p-2"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label className="font-semibold">Address</label>
        <input
          {...register("address", {
            required: "This is required",
            maxLength: { value: 150, message: "Maximum 150 characters" },
            minLength: { value: 5, message: "Minimum 5 characters" },
            setValueAs: (value) => value.trim(),
          })}
          placeholder="Address"
          className="h-10 border rounded-xl p-2"
        />
        {errors.address && <p>{errors.address.message}</p>}

        <label className="font-semibold">Gmail</label>
        <input
          {...register("gmail", {
            required: "This is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
            setValueAs: (value) => value.trim(),
          })}
          placeholder="Gmail"
          className="h-10 border rounded-xl p-2"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <label className="font-semibold">Avatar</label>
        <input
          type="file"
          {...register("avatar", { required: "This is required" })}
          className="h-10 border rounded-xl p-1"
          onChange={async (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const base64 = await toBase64(file);
            setPreview(base64);
          }}
        />
        {preview && <img src={preview} alt="preview" style={{ width: 150 }} />}
        {errors.avatar && <p>{errors.avatar.message}</p>}

        <button
          type="submit"
          className="border p-3 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900 mt-2"
          disabled={createMutation.isPending}
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
