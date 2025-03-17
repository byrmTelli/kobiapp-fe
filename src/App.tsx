import { Navigate, Route, Routes } from "react-router-dom";
import { pages } from "./constants/Pages";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { apiHome } from "./store/api/enhanced/enhancedApiHome";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCompany } from "./store/slices/companySlice";
import { CompanyInformationViewModelForHomePage } from "./store/api/generated/generatedApiHome";

function App() {
  // States
  const dispatch = useDispatch();
  // Queries
  const companyDataQuery = apiHome.useGetApiHomeGetCompanyInformationsQuery();
  // Mutations
  const companyData =
    companyDataQuery.data?.data ??
    ({} as CompanyInformationViewModelForHomePage);
  // Effects
  useEffect(() => {
    dispatch(setCompany(companyData));
  }, [companyData]);

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
