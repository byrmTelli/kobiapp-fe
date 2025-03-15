import { Navigate, Route, Routes } from "react-router-dom";
import { pages } from "./constants/Pages";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
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
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
