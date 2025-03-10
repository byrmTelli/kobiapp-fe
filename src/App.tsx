import { Route, Routes, useNavigate } from "react-router-dom";
import { pages } from "./constants/Pages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { isTokenValid } from "./utils.ts/tokenUtils";
import { logout } from "./store/slices/authSlice";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  // States
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.user?.accessToken);
  const user = useSelector((state: RootState) => state.auth.user);
  // Effects
  useEffect(() => {
    console.log(user);
    const validToken = isTokenValid(token ?? "");
    if (!validToken) {
      dispatch(logout());
    }
  }, []);

  return (
    <Routes>
      {pages.map(({ rootPath, layout, subPages }) => (
        <Route key={rootPath} path={rootPath} element={layout}>
          {subPages?.map(({ isProtected, path, element }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoute isProtected={isProtected}>
                  {element}
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
