import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, deleteUserList, getUserList, updateUserList } from "./api";

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: () => getUserList(),
  });
};

export const useCreateuser = () => {
  return useMutation({
    mutationFn: (data) => createUser(data),
  });
};

export const useDeleteUserList = () => {
  return useMutation({
    mutationFn: (id) => deleteUserList(id),
  });
};

export const useUpdateUserList = () => {
  return useMutation({
    mutationFn: ({ id, data }) => updateUserList({ id, data }),
  });
};
