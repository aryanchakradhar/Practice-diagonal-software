import axios from "axios";
import { BASE_URL } from "./url/url";

export const getProducts = async() => {
    const response = await axios.get(`${BASE_URL}/product`);
    console.log(response)

    return response.data;
}