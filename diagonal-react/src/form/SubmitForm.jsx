import React, { useEffect, useState } from "react";
import { BASE_URL } from "./URL";
import { useForm } from "react-hook-form";

export default function SubmitForm() {
  const {register, handleSubmit, formState: { errors}} = useForm({});
  
  const onSubmit = async(data) => {    
    try {
        const response = await fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const data2 = await response.json();
        console.log(data2);
      } catch (error) {
        console.log(error);
      }
  }

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center min-w-2xs justify-between h-100 "
    >
      <label>Name:</label>
      <input {
        ...register("name", {
          required: true
       })} placeholder = "name"
       />
       {errors.name && <p>Name is required</p>}
      <label>Address:</label>
      <input {
        ...register("address", {
          required:true
        })} placeholder="address"
        
      />
      {errors.address && <p>Address is required</p>}

      <label>Gmail:</label>
      <input {
        ...register("gmail", {  
          required: {
            value: true ,
            message: "Gmail is required"
          },   
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })
      } placeholder = "gmail" 
      />
{errors.gmail?.message && <p>{errors.gmail?.message}</p>}
{errors.gmail && <p>{errors.gmail.required?.message}</p>}


      <label>DOB:</label>
      <input {
        ...register("dob", {
          required:true
        })
      } placeholder="DOB"
      />
      {errors.dob && <p>Your date of birth is required</p>}
      <button type="submit" className="border-1  max-w-xs">
        submit
      </button>
    </form>
  );
}
