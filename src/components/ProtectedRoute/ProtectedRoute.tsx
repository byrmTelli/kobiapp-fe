import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isProtected?: boolean;
}

export default function ProtectedRoute({
  children,
  isProtected = false,
}: ProtectedRouteProps) {
  // States
  const auth = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isProtected && !auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
