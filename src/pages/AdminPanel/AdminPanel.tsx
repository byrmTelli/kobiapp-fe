import Button from "../../components/Buttons/Button/Button";
import SimpleTable from "../../components/SimpleTable/SimpleTable";

interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  image: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Electronic items",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    id: "2",
    name: "Clothing",
    description: "Fashion and clothing",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    id: "3",
    name: "Books",
    description: "Books and novels",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
  {
    id: "4",
    name: "Home Appliances",
    description: "Appliances for home",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    description: "Gaming Laptop",
    category: "Electronics",
    price: 1200,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "laptop.jpg",
  },
  {
    id: "2",
    name: "Smartphone",
    description: "Latest model",
    category: "Electronics",
    price: 800,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "smartphone.jpg",
  },
  {
    id: "3",
    name: "T-shirt",
    description: "Cotton T-shirt",
    category: "Clothing",
    price: 20,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "tshirt.jpg",
  },
  {
    id: "4",
    name: "Jeans",
    description: "Blue denim jeans",
    category: "Clothing",
    price: 50,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "jeans.jpg",
  },
  {
    id: "5",
    name: "Fiction Book",
    description: "Bestselling novel",
    category: "Books",
    price: 15,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "book.jpg",
  },
  {
    id: "6",
    name: "Non-fiction Book",
    description: "Learn something new",
    category: "Books",
    price: 18,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "nonfiction.jpg",
  },
  {
    id: "7",
    name: "Washing Machine",
    description: "Automatic washing machine",
    category: "Home Appliances",
    price: 500,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "washingmachine.jpg",
  },
  {
    id: "8",
    name: "Refrigerator",
    description: "Double-door fridge",
    category: "Home Appliances",
    price: 900,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "refrigerator.jpg",
  },
  {
    id: "9",
    name: "Smartwatch",
    description: "Fitness tracking smartwatch",
    category: "Electronics",
    price: 250,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "smartwatch.jpg",
  },
  {
    id: "10",
    name: "Tablet",
    description: "10-inch display",
    category: "Electronics",
    price: 350,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-01",
    image: "tablet.jpg",
  },
];

export const messages: Message[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "4",
    name: "Emily White",
    email: "emily.white@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "5",
    name: "David Black",
    email: "david.black@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "6",
    name: "Laura Green",
    email: "laura.green@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "7",
    name: "Robert Blue",
    email: "robert.blue@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "8",
    name: "Sarah Grey",
    email: "sarah.grey@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "9",
    name: "William Red",
    email: "william.red@example.com",
    createdAt: "2024-03-01",
  },
  {
    id: "10",
    name: "Olivia Orange",
    email: "olivia.orange@example.com",
    createdAt: "2024-03-01",
  },
];

export default function AdminPanel() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full h-full grid grid-cols-2 gap-4 p-4">
        <div className="fade-in w-full col-span-2 border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 rounded-lg flex justify-between p-4 shadow-lg min-h-48 transition-colors duration-500">
          <h1 className="text-lg font-bold text-gray-500 dark:text-gray-200">
            Dashboard
          </h1>
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="fade-in col-span-2 border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-4 shadow-lg min-h-96">
          <SimpleTable
            title="Messages"
            columns={[
              { header: "Name", accessorFn: (cell) => cell.name },
              { header: "Email", accessorFn: (cell) => cell.email },
              {
                header: "Created At",
                accessorFn: (cell) => cell.createdAt,
              },
              {
                header: "Actions",
                cell: () => (
                  <div className="flex items-center gap-2">
                    <Button
                      title="Inspect"
                      className="border border-gray-300 dark:border-gray-700 hover:bg-gray-200"
                      size="sm"
                    />
                    <Button title="Delete" varient="danger" size="sm" />
                  </div>
                ),
              },
            ]}
            data={messages}
          />
        </div>
        <div className="fade-in col-span-2 border flex flex-col gap-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-4 shadow-lg min-h-96">
          <div className="w-full">
            <SimpleTable
              title="Products"
              columns={[
                { header: "Name", accessorFn: (cell) => cell.name },
                {
                  header: "Description",
                  accessorFn: (cell) => cell.description,
                },
                {
                  header: "Category",
                  accessorFn: (cell) => cell.category,
                },
                {
                  header: "Price",
                  accessorFn: (cell) => cell.price,
                },
                {
                  header: "Created At",
                  accessorFn: (cell) => cell.createdAt,
                },
                {
                  header: "Actions",
                  cell: () => (
                    <div className="flex items-center gap-2">
                      <Button title="Edit" varient="amber" size="sm" />
                      <Button title="Delete" varient="danger" size="sm" />
                    </div>
                  ),
                },
              ]}
              data={products}
            />
          </div>
        </div>
        <div className="fade-in col-span-2 border flex flex-col gap-4 border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-500 rounded-lg p-4 shadow-lg min-h-96">
          <div className="w-full">
            <SimpleTable
              title="Categories"
              columns={[
                { header: "Name", accessorFn: (cell) => cell.name },
                {
                  header: "Description",
                  accessorFn: (cell) => cell.description,
                },
                {
                  header: "Created At",
                  accessorFn: (cell) => cell.createdAt,
                },
                {
                  header: "Updated At",
                  accessorFn: (cell) => cell.updatedAt,
                },
                {
                  header: "Actions",
                  cell: () => (
                    <div className="flex items-center gap-2">
                      <Button title="Edit" varient="amber" size="sm" />
                      <Button title="Delete" varient="danger" size="sm" />
                    </div>
                  ),
                },
              ]}
              data={categories}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
