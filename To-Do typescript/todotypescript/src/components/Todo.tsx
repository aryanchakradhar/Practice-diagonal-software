import React, { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type list = {
  id: number;
  todo: string;
  day: string;
};

export default function Todo() {
  const [data, setData] = useState<list[]>([]);
  const [visibledata, setVisibledata] = useState<list[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<list>({
    defaultValues: { todo: "", day: "sunday" },
  });
  console.log(data);

   useEffect(() => {
    setVisibledata(data);
  }, [data]);

  const onSubmit: SubmitHandler<list> = (todo) => {
    const newTodo = { ...todo, id: data.length };
    setData((prev) => [...prev, newTodo]);
    reset();
  };


  const filterdata = (day: string) => {
    const filtered = data.filter((item) => item.day === day);
    setVisibledata(filtered);
    console.log(filtered);
  };

  return (
    <>
      <nav className="flex justify-around mt-2">
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("sunday")}
        >
          Sunday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("monday")}
        >
          Monday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("tuesday")}
        >
          Tuesday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("wednesday")}
        >
          Wednesday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("thursday")}
        >
          Thursday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("friday")}
        >
          Friday
        </button>
        <button
          className=" border p-3 rounded-2xl"
          onClick={() => filterdata("saturday")}
        >
          Saturday
        </button>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mx-100 mt-10">
          <h1 className="flex justify-center">To do list</h1>
          <div className="flex justify-center p-2.5">
            <div className="relative w-full max-w-xl">
              <input
                {...register("todo", {
                  required: { value: true, message: "this is required" },
                })}
                placeholder="Add list"
                className="w-full pr-32 p-2.5 border rounded-2xl"
              />

              <select
                className="absolute top-1/2 right-2 -translate-y-1/2 border rounded-xl p-1"
                {...register("day")}
              >
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>
            </div>
            <button type="submit" className="ml-2 p-2 border rounded-2xl">
              Add
            </button>
            {errors.todo && <p>{errors.todo.message as string}</p>}
          </div>

          <ul>
            {visibledata.map((item) => (
              <li key={item.id}  className="gap-4">
                <input type="checkbox" />
                {item.todo}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}
