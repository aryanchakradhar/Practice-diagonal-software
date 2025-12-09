import axios from "axios";
import { BASE_URL } from "./form/url";

type User ={
    name: string,
    address: string,
    dob: string,
    gmail: string,
    id: string,
    avatar: string
}

export const getUserList = async () => {
  const response = await axios.get<User[]>(`${BASE_URL}/users`);
  console.log(response);
  return response.data;
};

// export const createUser = async (data: string) => {
//     const response = await axios.post(`${BASE_URL}/users`, data);
//     console.log(response);
// }