import axios from "axios";
import { BASE_URL } from "./form/url";

export const getUserList = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  console.log(response);
  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  console.log(response);

  return response;
};

export const deleteUserList = async (id) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  console.log(response.data);
  return response.data;
};

export const updateUserList = async ({ id, data }) => {
  const response = await axios.put(`${BASE_URL}/users/${id}`, data);
  console.log(response);
  return response;
};
