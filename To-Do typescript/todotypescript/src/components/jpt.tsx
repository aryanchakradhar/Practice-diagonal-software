// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// type list = {
//   todo: string;
//   day: string;
// };

// export default function Todo() {
//   const [todo, setTodo] = useState<list>({
//     todo: "",
//     day: "",
//   });
//   const [data, setData] = useState<list[]>([]);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (todo: list) => {
//     setData((prev) => [...prev, todo]);
//     setTodo({ todo: "", day: "sunday" });
//   };

//   // const addItems = (value: string) => {
//   //   setData((prev) => [...prev, value]);
//   // };
//   // onClick={() => {
//   //   addItems(todo);
//   //   setTodo("");
//   // }}
//   // const addItems = (value: string) => {
//   //   setData((prev) => [...prev, value]);
//   // };

//   return (
//     // <div>
//     //   <div className=" mx-100 mt-20">
//     //     <h1 className="flex justify-center">To do list</h1>
//     //     <div className="flex justify-center p-2.5">
//     //       <div className="relative w-full max-w-xl">
//     //         <input
//     //           type="text"
//     //           placeholder="Add list"
//     //           className="w-full pr-32 p-2.5 border rounded-2xl"
//     //           value={todo}
//     //           onChange={(e) => setTodo(e.target.value)}
//     //         />
//     //         <select
//     //           className="absolute top-1/2 right-2 -translate-y-1/2 border rounded-xl p-1"
//     //           value={day}
//     //           onChange={(e) => setDay(e.target.value)}
//     //         >
//     //           <option value="sunday">Sunday</option>
//     //           <option value="monday">Monday</option>
//     //           <option value="tuesday">Tuesday</option>
//     //           <option value="wednesday">Wednesday</option>
//     //           <option value="thursday">Thursday</option>
//     //           <option value="friday">Friday</option>
//     //           <option value="saturday">Saturday</option>
//     //         </select>
//     //       </div>
//     //       <button
//     //         className="ml-2 p-2 border rounded-2xl"
//     //         onClick={() => {
//     //           addItems(todo);
//     //           setTodo("");
//     //         }}
//     //       >
//     //         Add
//     //       </button>
//     //     </div>

//     //     <ul className="list-none">
//     //       {data.map((item) => (
//     //         <li key={item}>
//     //           <input type="checkbox" />
//     //           {item}{" "}
//     //         </li>
//     //       ))}
//     //     </ul>
//     //   </div>
//     // </div>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className=" mx-100 mt-20">
//         <h1 className="flex justify-center">To do list</h1>
//         <div className="flex justify-center p-2.5">
//           <div className="relative w-full max-w-xl">
//             <input
//               {...register("todo", {
//                 required: { value: true, message: "this is required" },
//               })}
//               placeholder="Add list"
//               className="w-full pr-32 p-2.5 border rounded-2xl"
//             />

//             <select
//               className="absolute top-1/2 right-2 -translate-y-1/2 border rounded-xl p-1"
//               {...register("day")}
//             >
//               <option value="sunday">Sunday</option>
//               <option value="monday">Monday</option>
//               <option value="tuesday">Tuesday</option>
//               <option value="wednesday">Wednesday</option>
//               <option value="thursday">Thursday</option>
//               <option value="friday">Friday</option>
//               <option value="saturday">Saturday</option>
//             </select>
//           </div>
//           <button type="submit" className="ml-2 p-2 border rounded-2xl">
//             Add
//           </button>
//           {errors.todo && <p>{errors.todo.message as string}</p>}
//         </div>

//         <ul className="list-none">
//           {data.map((item) => (
//             <li>
//               <input type="checkbox" />
//               {item.todo}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </form>
//   );
// }
