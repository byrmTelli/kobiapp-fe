import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
export default function MainFooter() {
  return (
    <div className="flex flex-row gap-10 py-10 justify-center border-t border-gray-300 dark:border-gray-700 w-full">
      <div className="">
        <h1 className="font-bold mb-2 border-b border-gray-300 dark:border-gray-700 w-full pb-1">
          Adress
        </h1>
        <div className="flex items-center justify-center gap-4">
          <IoLocationSharp />
          <p>123 Main St, Anytown, USA</p>
        </div>
      </div>
      <div className="h-full flex flex-col items-start">
        <h1 className="font-bold mb-2 border-b border-gray-300 dark:border-gray-700 w-full pb-1">
          Contact
        </h1>
        <div className="flex items-center justify-center gap-4">
          <MdAlternateEmail />
          <p>customcompany@mail.com</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaPhoneVolume />
          <p>+90 555 444 33 22 </p>
        </div>
      </div>
    </div>
  );
}
