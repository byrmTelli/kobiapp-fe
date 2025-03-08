export default function ContactUsForm() {
  return (
    <div className="flex flex-col gap-4 p-4 text-gray-700 dark:text-gray-200 rounded-r-lg">
      <h1 className="text-2xl font-bold">Information Form</h1>
      <p className="text-sm font-semibold">
        Do you need any solution or do you want to contact with us?
      </p>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-sm font-bold">
          Subject
        </label>
        <select
          name=""
          id=""
          className="w-full bg-gray-100 dark:bg-gray-800 px-2 py-4 rounded-lg outline-none"
        >
          <option value="">Bir konu seçin.</option>
          <option value="">Hizmet Talebi</option>
          <option value="">Ürün Talebi</option>
        </select>
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-sm font-bold">
          Phone Number
        </label>
        <input
          type="text"
          className="w-full bg-gray-100 dark:bg-gray-800 px-2 py-4 rounded-lg outline-none"
        />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <label htmlFor="" className="text-sm font-bold">
          Description
        </label>
        <textarea
          name=""
          id=""
          className="w-full min-h-48 bg-gray-100 dark:bg-gray-800 px-2 py-4 rounded-lg outline-none"
        ></textarea>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-amber-300 text-black px-4 py-2 min-w-[140px]">
          Gönder
        </button>
      </div>
    </div>
  );
}
