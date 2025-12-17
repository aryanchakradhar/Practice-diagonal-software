import SideBar from "./SideBar";
import DashboardTemplate from "./DashboardTemplate";

export default function AdminPage() {
  return (
    <div>
      <div className="flex justify-between px-5 place-items-center border py-5 shadow-md">
        <h1 className="text-4xl text-blue-400 font-medium">CONCEPT</h1>
        <button>profile</button>
      </div>
      <div className="flex">
        <SideBar />
        <DashboardTemplate />
      </div>
    </div>
  );
}
