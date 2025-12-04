import React from "react";
import Modal from "./Modal";
import { useDeleteUserList } from "../hooks";
import { queryClient } from "../queryClientProvider";

export default function TanStackDeleteCrud({ isOpen, onClose, editData }) {
  const deleteMutation = useDeleteUserList();

  const handleDelete = () => {
    deleteMutation.mutate(editData.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["user-list"],
        });
        alert("success");
        onClose();
      },
      onError: () => {
        alert("failed");
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3>Do you really want to delete this employee details?</h3>
      <div className="flex justify-center gap-10 ">
        <button
          className="p-2 m-2 border w-20 rounded-xl font-semibold bg-purple-950 text-white hover:bg-purple-900 cursor-pointer"
          onClick={handleDelete}
          disabled={deleteMutation.isPending}
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="p-2 m-2 border w-20 rounded-xl cursor-pointer"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
