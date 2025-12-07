import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "./Modal";
import { useCreateuser } from "../hooks";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function TanStackAddCurd({ isOpen, onClose }) {
  const schema = z.object({
    name: z
      .string()
      .max(150, "Maximum character can be 150")
      .min(5, "Minimum 5 characters")
      .trim(),
    address: z
      .string()
      .max(150, "Maximum character can be 150")
      .min(5, "Minimum 5 characters")
      .trim(),
    gmail: z.email("Invalid gmail"),
    avatar: z.any(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [preview, setPreview] = useState(null);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const createMutation = useCreateuser();
  const Submit = (data) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const formatted = result.error;
      console.log(formatted);
    } else {
      alert("Success!");
      result.data;
    }
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
          {...register("name")}
          placeholder="Name"
          className="h-10 border rounded-xl p-2"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label className="font-semibold">Address</label>
        <input
          {...register("address")}
          placeholder="Address"
          className="h-10 border rounded-xl p-2"
        />
        {errors.address && <p>{errors.address.message}</p>}

        <label className="font-semibold">Gmail</label>
        <input
          {...register("gmail")}
          placeholder="Gmail"
          className="h-10 border rounded-xl p-2"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <label className="font-semibold">Avatar</label>
        <input
          type="file"
          {...register("avatar")}
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
