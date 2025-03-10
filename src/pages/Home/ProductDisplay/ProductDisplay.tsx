import Button from "../../../components/Buttons/Button/Button";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductDisplay() {
  return (
    <div
      id="servicesSection"
      className="flex flex-col py-10 items-center w-full text-gray-700 dark:text-gray-200 gap-4 "
    >
      <h1 className="text-4xl font-bold">Products</h1>
      <div className="grid grid-cols-2 w-5/6 mt-10">
        <div className="">
          <ProductCard />
        </div>
        <div className="bg-black/90 p-10 text-gray-200 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Category Description</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus dolore ut quibusdam, recusandae, fugit dolores cumque
            sequi praesentium voluptate amet ex veniam eius explicabo dolorem
            tempora animi quia libero sit possimus non quas officiis aspernatur
            dolorum. Fugit velit error, odit suscipit magnam quos? Fuga at
            optio, cumque aliquid corporis a.
          </p>
          <div className="w-full flex justify-end">
            <Button title="Detail" varient="amber" className="min-w-48" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-5/6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
