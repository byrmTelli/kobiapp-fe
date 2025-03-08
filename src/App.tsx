import { Route, Routes } from "react-router-dom";
import { pages } from "./constants/Pages";

function App() {
  return (
    <Routes>
      {pages.map(({ rootPath, layout, subPages }) => (
        <Route key={rootPath} path={rootPath} element={layout}>
          {subPages?.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
