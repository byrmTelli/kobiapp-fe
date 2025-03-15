import { useSelector } from "react-redux";
import { pages } from "../../constants/Pages";
import { BreadcrumComponentProps } from "./types";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store/store";
import { isTokenValid } from "../../utils.ts/tokenUtils";

export default function Breadcrum({}: BreadcrumComponentProps) {
  // States
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);
  const token = useSelector((state: RootState) => state.auth.user?.accessToken);
  const resultTokenValid = isTokenValid(token ?? "");

  const findMatchingPages = () => {
    const breadcrumbs = [];

    const rootPage = pages.find((page) =>
      pathnames[0]
        ? page.rootPath.includes(pathnames[0])
        : page.rootPath === "/"
    );

    if (rootPage) {
      breadcrumbs.push({
        title: rootPage.title,
        path: rootPage.rootPath,
      });

      if (pathnames[1]) {
        const subPage = rootPage.subPages?.find(
          (sub) => sub.path === pathnames[1]
        );

        if (subPage) {
          breadcrumbs.push({
            title: subPage.title,
            path: `${rootPage.rootPath}/${subPage.path}`,
          });
        }
      }
    }

    return breadcrumbs;
  };

  const matchedPages = findMatchingPages();

  return (
    <div className="w-full h-24 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-gray-100 flex items-center px-4">
      {matchedPages.map((page, index) => (
        <div key={index} className="flex items-center">
          <span className="text-gray-500 dark:text-gray-300 font-bold">
            {page.title}
          </span>
          {index < matchedPages.length - 1 && (
            <span className="mx-2 text-gray-400">{">"}</span>
          )}
        </div>
      ))}
    </div>
  );
}
