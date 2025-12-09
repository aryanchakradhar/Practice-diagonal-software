import { useQuery } from "@tanstack/react-query"
import { getUserList } from "./api";

export const useGetUserList = () => {
    return useQuery({
        queryKey: ['user-list'],
        queryFn: () => getUserList(),
    });
}