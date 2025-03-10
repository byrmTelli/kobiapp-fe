import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminPanelLayout/AdminLayout";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import Homepage from "../pages/Home/Homepage";
import { Page } from "./types";
import LoginPage from "../pages/AdminPanel/LoginPage/LoginPage";
import BlankLayout from "../layouts/BlankLayout/BlankLayout";
import UsersPanel from "../pages/AdminPanel/UsersPanel/UsersPanel";

export const pages: Page[] = [
  {
    rootPath: "/",
    layout: <MainLayout />,
    subPages: [
      {
        title: "Home",
        path: "",
        breadCrumb: "Home",
        element: <Homepage />,
      },
    ],
  },
  {
    rootPath: "/admin",
    layout: <AdminLayout />,
    isProtected: true,
    subPages: [
      {
        title: "Admin Panel",
        path: "management",
        breadCrumb: "Admin Panel",
        element: <AdminPanel />,
        isProtected: true,
      },
      {
        title: "Kullanıcı Yönetim Paneli",
        path: "users",
        breadCrumb: "Kullanıcı Yönetim Paneli",
        element: <UsersPanel />,
        isProtected: true,
      },
    ],
  },
  {
    rootPath: "/auth",
    layout: <BlankLayout />,
    subPages: [
      {
        title: "Login",
        path: "login",
        breadCrumb: "Login",
        element: <LoginPage />,
      },
    ],
  },
];
