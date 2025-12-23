import { CgProfile } from "react-icons/cg";
import { FaTable } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type SidebarProps = {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({ expanded, setExpanded }: SidebarProps) {
  return (
    <div
      className={`
    p-5 text-white bg-[#0E0C29] fixed top-20 left-0 bottom-0
    transition-all duration-300  w-20
       ${expanded ? "lg:w-[300px]" : "lg:w-[80px]"}

  `}
    >

      <div
        className={`p-5 flex justify-center ${
          expanded ? "lg:justify-between sm:justify-center" : "justify-center"
        }`}
      >
        <h3
          className={`inline ${
            expanded ? "sm:overflow-hidden overflow-hidden" : "overflow-hidden"
          }`}
        >
          Menu
        </h3>
        <button
          className="p-1.5 rounded-lg hover:bg-black hidden lg:flex"
          onClick={() => setExpanded((curr) => !curr)}
        >
          {expanded ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>

      <div>
        <div className="flex flex-col">
          <button
            className="group relative flex items-center gap-4 p-3 rounded-lg
             hover:bg-[#44284B]
             justify-center lg:justify-start"
          >
            <CgProfile className="text-xl" />

            <span className={`${expanded ? "hidden lg:inline" : "hidden"}`}>
              Dashboard
            </span>
            <span
              className={`
                  absolute left-full ml-3
                  whitespace-nowrap rounded-md
                  bg-black text-white text-sm px-3 py-1
                  opacity-0 scale-95 pointer-events-none
                  transition-all duration-200
                  group-hover:opacity-100 group-hover:scale-100
                  ${expanded ? "lg:hidden" : ""}
                `}
            >
              Dashboard
            </span>
          </button>

          <button
            className="group relative flex items-center gap-4 p-3 rounded-lg
             hover:bg-[#44284B]
             justify-center lg:justify-start"
          >
            <FaTable className="text-xl" />

            <span className={`${expanded ? "hidden lg:inline" : "hidden"}`}>
              Tables
            </span>

            <span
              className={`
      absolute left-full ml-3
      whitespace-nowrap rounded-md
      bg-black text-white text-sm px-3 py-1
      opacity-0 scale-95 pointer-events-none
      transition-all duration-200
      group-hover:opacity-100 group-hover:scale-100
      ${expanded ? "lg:hidden" : ""}
    `}
            >
              Tables
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
