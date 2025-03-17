import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
export default function MainFooter() {
  // States
  const company = useSelector((state: RootState) => state.company);
  return (
    <div className="grid grid-cols-5 gap-10 py-10 justify-center border-t border-gray-300 dark:border-gray-700 w-full z-10 bg-white dark:bg-gray-900">
      <div className="w-full px-10 text-xl font-semibold flex items-center">
        <h1>{company.name}</h1>
      </div>
      <div className="">
        <h1 className="font-bold mb-2 border-b border-gray-300 dark:border-gray-700 w-full pb-1">
          Adres
        </h1>
        <div className="flex gap-4">
          <IoLocationSharp />
          <p>
            {company.adress ?? ""}
            {company.adress && ", No:"}
            {company.adressGateNumber} {company.district} {company.provience}
            {company.provience && " / "}
            {company.country}
          </p>
        </div>
      </div>
      <div className="h-full flex flex-col items-start">
        <h1 className="font-bold mb-2 border-b border-gray-300 dark:border-gray-700 w-full pb-1">
          İletişim
        </h1>
        <div className="flex items-center justify-center gap-4">
          <MdAlternateEmail />
          <p>{company.email}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaPhoneVolume />
          <p>+90 {company.phone} </p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold mb-2 border-b border-gray-300 dark:border-gray-700 w-full pb-1">
          Sosyal Medya
        </h1>
      </div>
    </div>
  );
}
