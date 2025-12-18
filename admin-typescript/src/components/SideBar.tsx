import { CgProfile } from "react-icons/cg";
import { FaTable } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

export default function SideBar() {
  const [expanded, setExpanded] = useState<boolean>(true);
  return (
    <div
      className={`container p-5 text-white min-h-screen w-1/7 bg-[#0E0C29] ${
        expanded ? "" : "w-20  place-items-center"
      }`}
    >
      <div className="p-5 flex justify-between">
        <h3
          className={`overflow-hidden transition-all ${expanded ? "" : "w-0"}`}
        >
          Menu
        </h3>
        <button
          className="p-1.5 rounded-lg hover:bg-black"
          onClick={() => setExpanded((curr) => !curr)}
        >
          {expanded ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>

      <div>
        <div className="flex flex-col">
          <button
            className={`flex group relative p-3 rounded-lg cursor-pointer place-items-center gap-4 hover:bg-[#44284B]${
              expanded ? "" : "inline-flex justify-center "
            }`}
          >
            <CgProfile />
            {expanded && (
              <span className="overflow-hidden transition-all">Dashboard</span>
            )}
            {!expanded && (
              <span
                className="
                      absolute left-full ml-3
                      whitespace-nowrap
                      rounded-md bg-black text-white text-sm px-3 py-1
                      opacity-0 scale-95
                      pointer-events-none
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:scale-100
                    "
              >
                Dashboard
              </span>
            )}
          </button>

          <button
            className={`group relative flex p-3 rounded-lg cursor-pointer place-items-center gap-4 hover:bg-[#44284B]${
              expanded ? "" : "inline-flex justify-center "
            }`}
          >
            <FaTable />
            {expanded && (
              <span className="overflow-hidden transition-all">Dashboard</span>
            )}
            {!expanded && (
              <span
                className="
                      absolute left-full ml-3
                      whitespace-nowrap
                      rounded-md bg-black text-white text-sm px-3 py-1
                      opacity-0 scale-95
                      pointer-events-none
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:scale-100
                    "
              >
                Tables
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
