import axios from "axios";
import { BASE_URL } from "./form/url";
import type { AddUserData, EditUserData, User } from "./types";

export const getUserList = async () => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  console.log(response);
  return response.data;
};

export const createUser = async (data: AddUserData) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  console.log(response);
}

export const deleteUserList = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  console.log(response.data);
  return response.data;
};

export const updateUserList = async ({ data, id }: { data: EditUserData, id: string }) => {
  const response = await axios.post(`${BASE_URL}/users/${id}`, data);
  console.log(response);
  return response;
}
