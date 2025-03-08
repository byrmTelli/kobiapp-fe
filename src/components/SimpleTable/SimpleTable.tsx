import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { SimpleTableProps } from "./types";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaArrowDownShortWide, FaArrowUpShortWide } from "react-icons/fa6";

export default function SimpleTable<T extends Record<string, any>>({
  data,
  columns,
  title,
  toolbarActions,
  exportable,
}: SimpleTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  // const tableState = useMemo(() => data, [data]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w-full flex flex-col">
      <div className="w-full pr-[0.5px] border border-gray-300 dark:border-gray-700 rounded-t-lg">
        <div className="flex items-center min-h-24">
          <div className="w-1/2 pl-8">
            <h1 className="font-bold text-gray-700 dark:text-gray-200 select-none uppercase text-xl">
              {title}
            </h1>
          </div>
          <div className="w-1/2 p-3 flex justify-end">
            {toolbarActions && <div>{toolbarActions}</div>}
            <div className="flex px-4 items-center justify-end">
              {exportable && (
                <button className="text-gray-200 bg-green-700 border border-gray-300 dark:border-gray-700 select-none min-w-12 px-4 py-2">
                  <RiFileExcel2Line className="text-2xl" />
                </button>
              )}
            </div>
            <div className="w-1/2 border border-gray-300 dark:border-gray-700 transition-colors duration-500 flex items-center justify-center">
              <input
                type="text"
                className="outline-none px-3 text-sm text-gray-700 w-full dark:bg-gray-800 dark:text-gray-200 py-4 transition-colors duration-500"
                placeholder="Search"
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <table className="table-auto border border-gray-200 dark:border-gray-700 transition-colors duration-500">
        <thead className="bg-gray-100 text-gray-700 dark:text-gray-200 font-semibold">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <td
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  className="px-4 py-2 transition-colors duration-500 bg-gray-100 dark:bg-gray-900 dark:text-gray-200 border-r border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-2 min-h-10">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "asc" ? (
                        <FaArrowUpShortWide />
                      ) : (
                        <FaArrowDownShortWide />
                      )
                    ) : null}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="p-2 border-r border-b border-gray-300 dark:border-gray-700"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex text-xs items-center">
        <div className="w-1/2 flex items-center justify-between gap-4 p-4">
          <p className="">
            Mevcut Kayıt Sayısı{": "}
            <span className="font-bold">
              {table.getRowModel().rows.length}{" "}
            </span>
          </p>
          <div className="flex gap-4 items-center">
            <span className="page-info">
              {"Sayfa: "}
              {table.getState().pagination.pageIndex + 1} |{" "}
              {table.getPageCount()}
            </span>
            <label>
              Sayfa Boyutu:{" "}
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => table.setPageSize(Number(e.target.value))}
                className="outline-none"
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="flex w-1/2 justify-end text-xs select-none">
          <div className="flex items-center gap-1">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="border border-gray-300 hover:bg-gray-600 hover:text-gray-200 text-gray-700 dark:text-gray-200 font-bold p-2 w-[5rem] dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              Önceki
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="border border-gray-300 hover:bg-gray-600 hover:text-gray-200 text-gray-700 dark:text-gray-200 font-bold p-2 w-[5rem] dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
              Sonraki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
