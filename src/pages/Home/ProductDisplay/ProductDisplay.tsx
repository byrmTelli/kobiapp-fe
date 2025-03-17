import { useEffect, useState } from "react";
import { apiMinistry } from "../../../store/api/enhanced/enhancedApiMinistry";
import { MinistryViewModelForHomePage } from "../../../store/api/generated/generatedApiMinistry";
import ProductCard from "./ProductCard/ProductCard";
import { ProductDisplaySectionProps } from "./types";
import { MinistryCategoryViewModel } from "../../../store/api/generated/generatedApiMinistryCategory";
import classNames from "classnames";

export default function ProductDisplay({
  categories,
}: ProductDisplaySectionProps) {
  // States
  const [
    filteredMinistryCategoryDataList,
    setFilteredMinistryCategoryDataList,
  ] = useState<MinistryViewModelForHomePage[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<MinistryCategoryViewModel | null>(null);

  // Queries
  const ministryListQuery = apiMinistry.useGetApiHomeGetMinistryListDataQuery(
    undefined,
    { refetchOnMountOrArgChange: true }
  );

  // Mutation
  const ministryListData =
    ministryListQuery.data?.data ?? ([] as MinistryViewModelForHomePage[]);

  useEffect(() => {
    if (ministryListData.length > 0) {
      if (selectedCategory === null) {
        setFilteredMinistryCategoryDataList(ministryListData);
        setSelectedCategory(ministryListData[0] ?? null);
      } else {
        const filteredList = ministryListData
          .filter((data) => data.category?.id === selectedCategory.id)
          .map((data) => data);
        setFilteredMinistryCategoryDataList(filteredList);
      }
    }
  }, [selectedCategory, ministryListData]);

  return (
    <div
      id="servicesSection"
      className="flex flex-col py-10 items-center w-full text-gray-700 dark:text-gray-200 gap-4 "
    >
      <h1 className="text-4xl font-bold">Hizmetlerimiz</h1>
      <div className=" w-5/6 py-10 px-10 mt-10 bg-gray-800 dark:bg-amber-400 flex items-center justify-between shadow-lg transition-colors duration-300">
        <div className="">
          <div className="flex items-center gap-4">
            {categories.map((data) => (
              <div
                key={data.id}
                onClick={() => setSelectedCategory(data)}
                className={classNames(
                  " text-lg cursor-pointer transition-colors duration-300 font-bold",
                  {
                    "text-amber-400 dark:text-gray-800":
                      selectedCategory?.id === data?.id,
                  },
                  {
                    "text-gray-50": selectedCategory?.id != data?.id,
                  }
                )}
              >
                {data.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 w-5/6">
        {filteredMinistryCategoryDataList.length > 0 ? (
          filteredMinistryCategoryDataList.map(
            (data: MinistryViewModelForHomePage) => (
              <ProductCard key={data.id} ministry={data} />
            )
          )
        ) : (
          <div className="col-span-3 min-h-96 w-full text-center flex items-center justify-center fade-in">
            <p className=" italic text-2xl font-bold text-amber-400">
              {selectedCategory?.name} isimli kategoriye ait herhangi bir hizmet
              mevcut değildir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
