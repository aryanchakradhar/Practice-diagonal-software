import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type FilterFn,
  type SortingState,
} from "@tanstack/react-table";
import { useGetProducts } from "../hook";
import type { ProductList } from "../type";
import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";

const columnHelper = createColumnHelper<ProductList>();

const columns = [
  columnHelper.accessor("customer_name", {
    header: "Customer_Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("order_time", {
    header: "Order_Time",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("product_name", {
    header: "Product_Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];

const globalSearchFilter: FilterFn<ProductList> = (
  row,
  _columnId,
  filterValue
) => {
  const search = (filterValue ?? "").toLowerCase();
  return (
    row.original.customer_name.toLowerCase().includes(search) ||
    row.original.product_name.toLowerCase().includes(search)
  );
};
export default function Table() {
  const { data } = useGetProducts();
  const [filtering, setFiltering] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: data ?? [],
    columns,
    defaultColumn: {
      minSize: 80,
      maxSize: 400,
    },
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
    onSortingChange: setSorting,
    globalFilterFn: globalSearchFilter,
  });
  return (
    <div className="mt-5 bg-white rounded-3xl shadow-md p-5">
      <div className="flex justify-between p-3">
        <h1 className="text-bold text-2xl">Recent Orders</h1>
        <div className="flex place-items-center ">
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="border relative rounded-md  pl-1.5 p-1 pr-8 min-w-xl"
            placeholder="search..."
          />
          <FaSearch className="absolute right-15" />
        </div>
      </div>
      <table className="w-full table-fixed">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="sticky top-0 border bg-[#0E0C29] text-white text-m "
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border p-3.5 relative"
                  style={{ width: header.column.getSize() }}
                >
                  <div className="flex items-center justify-between cursor-pointer select-none">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <FaArrowUp />,
                      desc: <FaArrowDown />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`
                          absolute right-0 top-0 h-full w-1.5
                          cursor-col-resize
                          touch-none select-none
                          bg-transparent
                          hover:bg-white/40
                          ${header.column.getIsResizing() ? "bg-white" : ""}
                      `}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="odd:bg-gray-200 even:bg-white">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border p-2"
                  style={{ width: cell.column.getSize() }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={() => table.setPageIndex(0)}
          className="px-3 py-1.5 border rounded-2xl bg-[#0E0C29] text-white hover:bg-[#44284B] cursor-pointer"
        >
          First Page
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="px-3 py-1.5 border rounded-2xl bg-[#0E0C29] text-white hover:bg-[#44284B] cursor-pointer"
        >
          Previous Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="px-3 py-1.5 border rounded-2xl bg-[#0E0C29] text-white hover:bg-[#44284B] cursor-pointer"
        >
          Next Page
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-3 py-1.5 border rounded-2xl bg-[#0E0C29] text-white hover:bg-[#44284B] cursor-pointer"
        >
          Last Page
        </button>
      </div>
    </div>
  );
}
