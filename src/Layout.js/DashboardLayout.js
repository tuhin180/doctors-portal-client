import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../component/Pages/Shared/Header";
import { AuthUserContext } from "../context/UserContext";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthUserContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="Dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appoinment</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/users">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add a Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctors">manage Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
