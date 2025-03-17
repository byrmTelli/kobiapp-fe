import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminPanelLayout/AdminLayout";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import Homepage from "../pages/Home/Homepage";
import { Page } from "./types";
import LoginPage from "../pages/AdminPanel/LoginPage/LoginPage";
import BlankLayout from "../layouts/BlankLayout/BlankLayout";
import UsersPanel from "../pages/AdminPanel/UsersPanel/UsersPanel";
import MinistriesPanelPage from "../pages/AdminPanel/MinistriesPanel/MinistriesPanelPage";
import CategoriesPanelPage from "../pages/AdminPanel/CategoriesPanel/CategoriesPanelPage";
import MessagesPage from "../pages/AdminPanel/MessagesPanel/MessagesPage";
import MinistryDetailPage from "../pages/AdminPanel/MinistriesPanel/MinistryDetailPage/MinistryDetailPage";

export const pages: Page[] = [
  {
    rootPath: "/",
    layout: <MainLayout />,
    title: "Ana Sayfa",
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
    title: "Admin Panel",
    isProtected: true,
    subPages: [
      {
        title: "Yönetim Paneli",
        path: "management",
        breadCrumb: "Admin Panel",
        element: <AdminPanel />,
        isProtected: true,
      },
      {
        title: "Kullanıcılar Paneli",
        path: "users",
        breadCrumb: "Kullanıcı Yönetim Paneli",
        element: <UsersPanel />,
        isProtected: true,
      },
      {
        title: "Hizmetler Paneli",
        path: "ministries",
        breadCrumb: "Hizmetler",
        element: <MinistriesPanelPage />,
        isProtected: true,
      },
      {
        title: "Hizmetler Paneli > Hizmet Detayı",
        path: "ministries-detail/:id",
        breadCrumb: "Hizmetler",
        element: <MinistryDetailPage />,
        isProtected: true,
      },
      {
        title: "Kategoriler Paneli",
        path: "categories",
        breadCrumb: "Kategoriler",
        element: <CategoriesPanelPage />,
        isProtected: true,
      },
      {
        title: "Mesajlar Paneli",
        path: "messages",
        breadCrumb: "Mesajlar",
        element: <MessagesPage />,
        isProtected: true,
      },
    ],
  },
  {
    rootPath: "/auth",
    layout: <BlankLayout />,
    title: "Giriş Paneli",
    subPages: [
      {
        title: "Giriş Yap",
        path: "login",
        breadCrumb: "Login",
        element: <LoginPage />,
      },
    ],
  },
];
