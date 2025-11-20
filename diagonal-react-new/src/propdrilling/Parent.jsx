import React from "react"
import Son from "./son"

export default function Parent({username}){
    return(
        <>
        <button onClick={() => {
            alert("Hello from parent")
        }}> show messgae</button>
        <Son username = {username} />
      </>
    )
}


