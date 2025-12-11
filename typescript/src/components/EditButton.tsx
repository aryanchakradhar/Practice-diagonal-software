import type { EditUserData } from "../types";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { useUpdateUserList } from "../hook";

type EditButtonProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string
};

export default function EditButton({
  isOpen,
  onClose,
  id,
}: EditButtonProps) {
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
    gmail: z.email("Invalid gmail").trim(),
    avatar: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const updateMutation = useUpdateUserList();

  const onSubmit = (data:EditUserData) =>{
    console.log("dasvjasvdjvasd",data)
    const result = schema.safeParse(data);
    if (!result.success) {
      const formatted = result.error;
      console.log(formatted);
    } else {
       updateMutation.mutate(
      { id, data},
      {
        onSuccess: () => {
          alert("success");
          onClose();
        },
        onError: () => {
          alert("failed");
        },
      }
    )}
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h5 className="font-bold text-2xl">Edit Data</h5>
       <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full mt-2 gap-5 place-content-around"
      >
        <label className="font-semibold">Name</label>
        <input
          {...register("name")}
          placeholder="Name"
          className="h-10 border rounded-xl p"
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label className="font-semibold">Address</label>
        <input
          {...register("address")}
          placeholder="Address"
          className="h-10 border rounded-xl p-1"
        />
        {errors.address && <p>{errors.address.message}</p>}
        <label className="font-semibold">Gmail</label>
        <input
          {...register("gmail")}
          placeholder="Gmail"
          className="h-10 border rounded-xl p-1"
        />
        {errors.gmail && <p>{errors.gmail.message}</p>}

        <button
          type="submit"
          className="border p-3 rounded-xl cursor-pointer font-semibold bg-purple-950 text-white hover:bg-purple-900"
          disabled={updateMutation.isPending}
        >
          submit
        </button>
      </form>
    </Modal>
  );
}
