import placeHolder from "../../assets/placeholder.jpg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import ThemeToggleButton from "../Buttons/ThemeToggleButton/ThemeToggleButton";
import CustomPopover from "../Popover/CustomPopover";
import { IoMdChatbubbles, IoMdSettings } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { toggleAdminPanelSideMenu } from "../../store/slices/appSlice";

export default function AdminNavbar() {
  // States
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handlers
  const handleLogoutButtonClick = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleSideMenuToggleButtonClick = () => {
    dispatch(toggleAdminPanelSideMenu());
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white flex items-center justify-between dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-10 py-4">
      <div className="flex items-center gap-4 justify-center select-none">
        <div onClick={handleSideMenuToggleButtonClick} className="">
          <FaBars className="text-2xl" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
      </div>
      <div className="">
        <Link to="/">
          <span className="text-gray-00 dark:text-gray-200 font-bold">
            Ana Sayfa
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="">
          <ThemeToggleButton />
        </div>
        <div className="relative p-2 rounded-full border border-gray-300 dark:border-gray-700">
          <div className="size-3 bg-green-400 animate-pulse rounded-full absolute top-0 left-0"></div>
          <img
            src={placeHolder}
            alt="profile"
            className="size-8 rounded-full"
          />
        </div>
        <div className="relative border border-gray-300 rounded-lg dark:border-gray-700">
          <CustomPopover
            mainItem={
              <div className="flex flex-col justify-center items-start text-xs">
                <p className="text-base font-bold text-gray-600 dark:text-gray-300">
                  Bayram Telli
                </p>
                <p className="text-sm text-gray-400">
                  byrm.telli.contact@gmail.com
                </p>
              </div>
            }
            subItems={[
              {
                title: "Settings",
                icon: <IoMdSettings />,
              },
              {
                title: "Kullanıcılar",
                icon: <IoMdChatbubbles />,
                path: "/admin/user-management",
              },
              {
                title: "Messages",
                icon: <IoMdChatbubbles />,
              },
            ]}
          />
        </div>

        <button
          onClick={() => handleLogoutButtonClick()}
          className="text-gray-800 dark:text-gray-200 bg-gray-200  p-2 rounded-full hover:text-gray-500 dark:hover:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-500"
        >
          <RiLogoutBoxRLine className="text-xl" />
        </button>
      </div>
    </div>
  );
}
