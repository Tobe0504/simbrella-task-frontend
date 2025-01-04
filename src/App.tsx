import { Navigate, Route, Routes } from "react-router-dom";
import { routeComponents } from "./Utilities/routeComponents";
import { routes } from "./Utilities/routes";

function App() {
  return (
    <Routes>
      {/* Force navigate to the dashboard when routing to the base url */}
      <Route
        path={routes.BASE_URL}
        element={<Navigate to={routes.DASHBOARD} />}
      />

      {/* Dunamically mapping through possibele routes in the application */}
      {routeComponents.map((component) => {
        return (
          <Route
            element={component.element}
            key={component.title}
            path={component.route}
          />
        );
      })}
    </Routes>
  );
}

export default App;
