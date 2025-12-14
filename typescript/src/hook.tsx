import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, deleteUserList, getUserList, updateUserList } from "./api";
import type { AddUserData, UpdateUserParams, User } from "./types";
import { useState } from "react";

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: () => getUserList(),
  });
};

export const useCreateUser = () => {
  return useMutation<User, Error, AddUserData>({
    mutationFn: (data) => createUser(data),
  });
};

export const useDeleteUserList = () => {
  return useMutation<User, Error, string>({
    mutationFn: (id: string) => deleteUserList(id),
  });
};

export const useUpdateUserList = () => {
  return useMutation<User, Error, UpdateUserParams>({
    mutationFn: ({ data, id }) => updateUserList({ data, id }),
  });
};

export const useCounter = () => {
  const [count, setCounter] = useState<number>(0);

  const increaseCount = () => {
    setCounter(count + 1);
  };

  const decreaseCount = () => {
    setCounter(count - 1);
    if (count < 1) {
      setCounter(0);
      alert("the counter cannot be 0");
    }
  };

  const resetcount = () => {
    setCounter(0);
  };
  return {count, increaseCount, decreaseCount, resetcount} 
};
