import ThemeToggleButton from "../Buttons/ThemeToggleButton/ThemeToggleButton";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

export default function MainNavbar() {
  // States
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full flex-flex-col items-center justify-center">
      <div className="w-full flex items-center justify-end border-gray-300 gap-4 text-gray-700 py-4 px-10 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 border-b transition-colors duration-500">
        {auth.isAuthenticated && auth.user?.id ? (
          <div className="flex items-center">
            <div
              onClick={() => navigate("/admin/management")}
              className="text-gray-700 dark:text-gray-200 font-semibold px-4 py-2 uppercase"
            >
              Yönetim Paneli
            </div>
            <div
              onClick={() => navigate("/auth/login")}
              className="text-gray-700 dark:text-gray-200 font-semibold px-4 py-2 uppercase"
            >
              Çıkış Yap
            </div>
          </div>
        ) : (
          <div
            onClick={() => navigate("/auth/login")}
            className="text-gray-700 dark:text-gray-200 font-semibold px-4 py-2 uppercase"
          >
            Giriş Yap
          </div>
        )}
        <div className="flex items-center justify-center gap-4">
          <MdAlternateEmail />
          <p>customcompany@mail.com</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaPhoneVolume />
          <p>+90 555 444 33 22 </p>
        </div>
      </div>
      <div className="flex flex-row items-center text-gray-700 dark:bg-gray-900 dark:text-gray-200 justify-between px-10 h-24  w-full transition-colors duration-500">
        <div className="text-2xl font-bold">Bayram T.</div>
        <div className="flex items-center gap-4 justify-center">
          <div className="font-bold cursor-pointer">
            <a href="#heroSection">Ana Sayfa</a>
          </div>
          <div className="font-bold cursor-pointer">
            <a href="#servicesSection">Hizmetlerimiz</a>
          </div>
          <div className="font-bold cursor-pointer">
            <a href="#contactSection">İletişim</a>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-row items-center justify-center gap-4">
            <ThemeToggleButton />
          </ul>
        </div>
      </div>
    </div>
  );
}
