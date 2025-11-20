import React from "react";
import GrandChild from "./GrandChild";

export default function Son({username}){
    return(
        <GrandChild username = {username} />
    )
}