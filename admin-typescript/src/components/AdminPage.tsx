import { useEffect, useState } from "react";
import DashboardTemplate from "./DashboardTemplate";
import SideBar from "./SideBar";
import { CgProfile } from "react-icons/cg";
import { debounce } from "../debounce";

export default function AdminPage() {
  const isLargeScreen = () => window.innerWidth >= 1024;
  const [expanded, setExpanded] = useState(isLargeScreen);

  useEffect(() => {
    const handleResize = debounce(() => {
      console.log(78);
      setExpanded(window.innerWidth >= 1024);
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between px-5 place-items-center py-5 shadow-md top-0 sticky z-10 bg-white">
        <h1 className="lg:text-4xl text-2xl text-blue-400 font-medium">
          CONCEPT
        </h1>
        <button className="cursor-pointer p-3 rounded-full hover:bg-gray-100">
          <CgProfile className="lg:text-2xl text-xl" />
        </button>
      </div>
      <div className="flex">
        <SideBar expanded={expanded} setExpanded={setExpanded} />
        <div
          className={`flex-1  ${
            expanded
              ? "ml-[300px] w-[calc(100vw-300px)]"
              : "ml-[80px] w-[calc(100vw-80px)]"
          }`}
        >
          <DashboardTemplate />
        </div>
      </div>
    </>
  );
}
