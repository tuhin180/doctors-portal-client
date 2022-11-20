import AllUsers from "../component/AllUsers/AllUsers";
import Appoinment from "../component/Pages/Appoinment/Appoinment";
import Dashboard from "../component/Pages/Dashboard/Dashboard";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Register from "../component/Pages/Register/Register";
import ErrorPage from "../component/Pages/Shared/ErrorPage";
import DashboardLayout from "../Layout.js/DashboardLayout";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout.js/Main");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "appoinment", element: <Appoinment></Appoinment> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout> </DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default routes;
