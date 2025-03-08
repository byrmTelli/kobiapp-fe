import { Link } from "react-router-dom";
import { NavigationCardProps } from "./types";

export default function NavigationCard({
  title,
  icon,
  path,
}: NavigationCardProps) {
  return (
    <>
      <Link to={path}>
        <div className="bg-sky-800 hover:bg-teal-600 group flex flex-col gap-3 rounded-full p-4 h-[180px] w-[180px] lg:h-[200px] lg:w-[200px] text-gray-200 relative items-center justify-center">
          <h1 className="text-md md:text-xl font-semibold text-center">
            {title}
          </h1>
          <div className="text-5xl group-hover:animate-shake">{icon}</div>
        </div>
      </Link>
    </>
  );
}
