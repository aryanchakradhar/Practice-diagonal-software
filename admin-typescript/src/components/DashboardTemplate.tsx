import { GiReceiveMoney } from "react-icons/gi";
import { obj } from "../constant";
import { useGetProducts } from "../hook";
import Table from "./Table";
import { HiReceiptRefund } from "react-icons/hi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function DashboardTemplate() {
  const { data } = useGetProducts();
  console.log(data);
  return (
    <div className=" bg-[#F0F1F9] p-5">
      <div className="text-xl sm:text-2xl font-medium mb-4">
        E-commerce Dashboard Template
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        <div className="bg-white pt-5 px-5 rounded-3xl shadow-md  min-h-60">
          <h4 className=" text-gray-500 font-medium flex place-items-center justify-between">
            Total Revenue <FaMoneyBillTrendUp className="text-3xl" />
          </h4>
          <h1 className="my-2 font-bold text-5xl">{obj.total_revenue}</h1>
        </div>
        <div className="bg-white pt-5 px-5 rounded-3xl shadow-md  min-h-60">
          <h4 className=" text-gray-500 font-medium flex place-items-center justify-between">
            Affiliate Revenue <BsCurrencyExchange className="text-3xl" />
          </h4>
          <h1 className="my-2 font-bold text-5xl">{obj.affiliate_revenue}</h1>
        </div>
        <div className="bg-white pt-5 px-5 rounded-3xl shadow-md  min-h-60">
          <h4 className=" text-gray-500 font-medium flex place-items-center justify-between">
            Refunds <HiReceiptRefund className="text-3xl" />
          </h4>
          <h1 className="my-2 font-bold text-5xl">{obj.refunds}</h1>
        </div>
        <div className="bg-white pt-5 px-5 rounded-3xl shadow-md  min-h-60">
          <h4 className=" text-gray-500 font-medium flex place-items-center justify-between">
            Avg. Revenue Per User <GiReceiveMoney className="text-3xl" />
          </h4>
          <h1 className="my-2 font-bold text-5xl">
            {obj.avg_revenue_per_user}
          </h1>
        </div>
      </div>
      <Table />
    </div>
  );
}
