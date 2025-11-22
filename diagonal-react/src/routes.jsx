import { createBrowserRouter, Form } from "react-router-dom";
import Counter from "./counter/Counter";
import FetchData from "./fetchdata/FetchData";
import Parent from "./propdrilling/Parent";
import Layout from "./Layout";
import SubmitForm from "./form/SubmitForm";
import Crud from "./crud/Crud";



const data = "something useful";
const username = "Aryan";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
               path: "",
               element: <Counter data={data} />, 
            },
            {
               path: "fetch",
               element: <FetchData />, 
            },
            {
               path: "parent",
               element: <Parent username={username}/>, 
            },
            {
               path: "form",
               element: <SubmitForm />
            },
            {
               path: "crud",
               element: <Crud />
            },
         ]
    },
])