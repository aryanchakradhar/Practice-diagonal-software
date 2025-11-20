import { createBrowserRouter } from "react-router-dom";
import Counter from "./counter/Counter";
import FetchData from "./fetchdata/FetchData";
import Parent from "./propdrilling/Parent";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Counter />,
        children:[
            {
               path: "",
               element: <Counter />, 
            },
            {
               path: "fetch",
               element: <FetchData />, 
            },
            {
               path: "Parent",
               element: <Parent />, 
            },

        ]
    },
])