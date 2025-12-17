import { useGetProducts } from "../hook";

export default function DashboardTemplate() {
  const {data} = useGetProducts();
  console.log(data);
  return (
    <div className="container bg-[#F0F1F9]  p-5 max-w-6/7 min-h-screen">
      <div className="p-5 text-2xl">E-commerce Dashboard Template</div>
      <div className="flex justify-between">
        <div className="bg-white shadow-md min-w-90 min-h-60">
          <h4 className="pt-5 pl-5 text-gray-500 font-medium">Total Revenue</h4>
        </div>
         <div className="bg-white shadow-md min-w-90 ">
          <h4 className="pt-5 pl-5 text-gray-500 font-medium">Affiliate Revenue</h4>
        </div>
         <div className="bg-white shadow-md min-w-90 ">
          <h4 className="pt-5 pl-5 text-gray-500 font-medium">Refunds</h4>
        </div>
         <div className="bg-white shadow-md min-w-90 ">
          <h4 className="pt-5 pl-5 text-gray-500 font-medium">Avg. Revenue Per User</h4>
        </div>
      </div>
    </div>
  );
}
