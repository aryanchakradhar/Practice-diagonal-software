import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUserList } from "./api";

export const useGetUserList = () => {
  return useQuery({
    queryKey: ["user-list"],
    queryFn: () => getUserList()
  });
};

export const useCreateuser = () => {
  return useMutation({
    mutationFn: (data) => createUser(data)
    
  })
}

// export const useDeleteUserList = () => {
//   return useMutation({
//     mutationFn: () => deleteUserList()
//   })
// }

// export const useUpdateUserList = () => {
//   return useMutation({
//     mutationFn: () => updateUserList()
//   })
// }