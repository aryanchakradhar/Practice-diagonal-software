import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { useCreateUser } from "../hook";
import type { AddUserData } from "../types";
import Modal from "./Modal";
import { FaTrash } from "react-icons/fa";

type AddButtonProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddButton({ isOpen, onClose }: AddButtonProps) {
  const schema = z.object({
    name: z
      .string()
      .max(150, "Maximum character can be 150")
      .min(5, "Minimum 5 characters")
      .trim(),
    address: z
      .array(
        z.object({
          address1: z
            .string()
            .max(150, "Maximum character can be 150")
            .min(5, "Minimum 5 characters")
            .trim(),
        })
      )
      .min(1, "At least one address is required"),
    gmail: z.email("Invalid gmail"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      gmail: "",
      address: [{ address1: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
  });

  const [preview, setPreview] = useState<string | null>(null);

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await toBase64(file);
    setPreview(base64);
  };

  const createMutation = useCreateUser();
  const Submit = (data: AddUserData) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      alert("format is invalid");
    } else {
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
    }
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
        {fields.map((field, index) => (
          <div key={field.id} className="flex place-items-center justify-between gap-2">
            <input
              {...register(`address.${index}.address1`)}
              placeholder="Address"
              className="h-10 border rounded-xl flex-1 p-2"
            />
            
            <button type="button" className="border p-3 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900" onClick={() => remove(index)}>
              <FaTrash />
            </button>
           
          </div>
        ))}
         <button
              type="button"
              onClick={() => append({ address1: "" })}
              className="border p-3 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900 mt-2"
            >
              Add Address
            </button>
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
          className="h-10 border rounded-xl p-1"
          onChange={handleFileChange}
        />
        {preview && <img src={preview} alt="preview" style={{ width: 150 }} />}

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
