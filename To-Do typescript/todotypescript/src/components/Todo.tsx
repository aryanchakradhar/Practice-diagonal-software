import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Day, type list } from "./type";
import { RiCalendarTodoFill } from "react-icons/ri";

export default function Todo() {
  const [data, setData] = useState<list[]>([]);
  const [selectedDay, setSelectedDay] = useState<Day>(Day.Sunday);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const { register, handleSubmit, reset } = useForm<list>();

  const onSubmit: SubmitHandler<list> = (todo) => {
    setData((prev) => [
      ...prev,
      { ...todo, id: `${Date.now()}`, day: selectedDay },
    ]);
    reset();
  };

  const visibledata = data.filter((item) => item.day === selectedDay);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container border rounded-2xl mt-5 p-4 mx-auto max-w-200">
      <div className="flex  justify-around mt-2">
        {Object.values(Day).map((day) => (
          <button
            key={day}
            className={`border place-items-center gap-1 flex p-3 rounded-2xl ${
              selectedDay === day ? "bg-[rgb(230,217,203)] text-black" : ""
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
            <RiCalendarTodoFill />
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 my-4">
        <input
          {...register("todo", { required: true })}
          placeholder={`Add todo for ${selectedDay}`}
          className="border p-2 rounded-xl flex-1"
        />
        <button
          type="submit"
          className="border p-2 rounded-xl bg-green-950 text-white hover:bg-green-900 cursor-pointer"
        >
          Add
        </button>
      </form>

      <ul>
        {visibledata.map((item) => (
          <li
            key={item.id}
            className="flex border items-center bg-[#F3EFEE] hover:bg-gray-100 hover:border gap-3 mb-2 p-2 rounded-2xl "
          >
            <input
              type="checkbox"
              checked={!!checkedItems[item.id]}
              onChange={() => handleCheckboxChange(item.id)}
              className="w-4 h-4 accent-gray-900"
            />
            <span
              className={`flex-1 ${
                checkedItems[item.id] ? "line-through text-gray-400" : ""
              }`}
            >
              {item.todo}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className="border p-2 rounded-xl bg-red-800 text-white hover:bg-red-700 cursor-pointer"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
