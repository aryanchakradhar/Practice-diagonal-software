import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, deleteUserList, getUserList, updateUserList } from "./api";
import type { AddUserData, UpdateUserParams } from "./types";

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: () => getUserList(),
  });
};

export const useCreateUser = () => {
  return useMutation<unknown, unknown, AddUserData>({
    mutationFn: (data) => createUser(data),
  });
};

export const useDeleteUserList = () => {
  return useMutation({
    mutationFn: (id: string) => deleteUserList(id),
  });
};

export const useUpdateUserList = () => {
  return useMutation<unknown, unknown, UpdateUserParams>({
    mutationFn: ({data, id}) => updateUserList({data, id}),
  });
};
