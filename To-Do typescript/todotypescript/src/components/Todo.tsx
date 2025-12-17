import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Day, filtertype, type list } from "./type";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

export default function Todo() {
  const [data, setData] = useState<list[]>([]);
  const [selectedDay, setSelectedDay] = useState<Day>(Day.Sunday);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [selectedList, setSelectedList] = useState<filtertype>(filtertype.all);

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
  console.log(checkedItems);

  const totalTodo = visibledata.length;

  const completedTodo = visibledata.filter(
    (item) => checkedItems[item.id]
  ).length;

  const activeTodo = totalTodo - completedTodo;

  const filterTodo = visibledata.filter((item) => {
    if (selectedList === filtertype.completed) return checkedItems[item.id];
    if (selectedList === filtertype.active) return !checkedItems[item.id];
    return true;
  });

  return (
    <div className=" bg-blue-50 rounded-2xl p-20 min-h-screen mt-2 mx-auto max-w-300">
      <div className="flex  shadow-xl p-4 bg-white rounded-2xl justify-around mt-2">
        {Object.values(Day).map((day) => (
          <button
            key={day}
            className={` bg-[#F3F4F6] place-items-center gap-1 flex p-2 rounded-2xl ${
              selectedDay === day
                ? "bg-linear-to-r from-[#793feb] to-[#325EEB] text-white"
                : ""
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
            <RiCalendarTodoFill />
          </button>
        ))}
      </div>
      <div className="flex gap-6 my-10">
        <div className="flex-1 py-4 px-8 text-center shadow-xl bg-white rounded-2xl">
          <h1 className="text-purple-600 font-medium text-4xl">{totalTodo}</h1>
          <h3>Total</h3>
        </div>

        <div className="flex-1 py-4 px-8 text-center shadow-xl bg-white rounded-2xl">
          <h1 className="text-green-600 font-medium text-4xl">
            {completedTodo}
          </h1>
          <h3>Completed</h3>
        </div>

        <div className="flex-1 py-4 px-8 text-center shadow-xl bg-white rounded-2xl">
          <h1 className="text-blue-600 font-medium text-4xl">{activeTodo}</h1>
          <h3>Active</h3>
        </div>
      </div>

      <div className="shadow-xl py-3 px-6 bg-white rounded-2xl justify-around">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 my-4">
          <input
            {...register("todo", { required: true })}
            placeholder={`Add todo for ${selectedDay}...`}
            className="rounded-xl border border-gray-300 p-4 flex-1"
          />
          <button
            type="submit"
            className="flex place-items-center px-7 gap-3 rounded-xl bg-linear-to-r from-[#793feb] to-[#325EEB] text-white cursor-pointer "
          >
            <FaPlus />
            Add
          </button>
        </form>
      </div>
      <div className="flex  shadow-xl p-4 bg-white rounded-2xl justify-around mt-10">
        <button
          onClick={() => setSelectedList(filtertype.all)}
          className={
            selectedList === "all"
              ? "bg-linear-to-r from-[#793feb] to-[#325EEB]  text-white px-10 py-3 rounded-xl "
              : "px-10 py-3"
          }
        >
          All
        </button>
        <button
          onClick={() => setSelectedList(filtertype.active)}
          className={
            selectedList === "active"
              ? "bg-linear-to-r from-[#793feb] to-[#325EEB] text-white px-10 py-3 rounded-xl"
              : "px-10 py-3"
          }
        >
          Active
        </button>
        <button
          onClick={() => setSelectedList(filtertype.completed)}
          className={
            selectedList === "completed"
              ? "bg-linear-to-r from-[#793feb] to-[#325EEB] text-white px-10 py-3 rounded-xl"
              : "px-10 py-3"
          }
        >
          Completed
        </button>
      </div>
      <div className="shadow-xl py-8 px-5 bg-white rounded-2xl justify-around  max-h-100 overflow-y-auto mt-10">
        {filterTodo.length > 0 ? (
          <ul className="flex-row">
            {filterTodo.map((item) => (
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
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <FaCalendarDays className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              No TODO found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

// {
//   id:1
//   todo:"fads"
//   day:"safads"
// }

// {
//   "
//   id:1
//   todo:"fads"
//   day:"safads"
// ": undefined
// }