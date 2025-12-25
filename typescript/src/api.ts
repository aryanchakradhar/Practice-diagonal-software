import axios from "axios";
import { BASE_URL } from "./form/url";
import type { AddUserData, EditUserData, User } from "./types";

export const getUserList = async () => {
  const response = await axios.get<User[]>(`${BASE_URL}/user`);
  return response.data;
};

export const createUser = async (data: AddUserData) => {
  const response = await axios.post<User>(`${BASE_URL}/user`, data);
  return response.data;
}

export const deleteUserList = async (id: string) => {
  const response = await axios.delete<User>(`${BASE_URL}/user/${id}`);
  return response.data;
};

export const updateUserList = async ({ data, id }: { data: EditUserData, id: string }) => {
  const response = await axios.put(`${BASE_URL}/user/${id}`, data);
  return response.data;
}
