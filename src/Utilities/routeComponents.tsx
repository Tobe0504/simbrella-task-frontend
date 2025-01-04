import Dashboard from "../Containers/Dashboard";
import Loans from "../Containers/Loans";
import Transactions from "../Containers/Transactions";
import { routes } from "./routes";

export const routeComponents = [
  {
    title: "Dashboard",
    route: routes.DASHBOARD,
    element: <Dashboard />,
    properties: ["isHeaderRoute", "isProtected"],
  },
  {
    title: "Transactions",
    route: routes.TRANSACTIONS,
    element: <Transactions />,
    properties: ["isHeaderRoute", "isProtected"],
  },
  {
    title: "Loans",
    route: routes.LOANS,
    element: <Loans />,
    properties: ["isHeaderRoute", "isProtected"],
  },
];
