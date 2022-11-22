import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthUserContext } from "../../../context/UserContext";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthUserContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error);
      });
  };

  const menueItem = (
    <React.Fragment>
      <li>
        <Link to="/"> Home</Link>
      </li>

      <li>
        <Link to="/appoinment">Appoinment</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
          <li>
            <Link
              className="btn btn-primary rounded-xl text-white"
              to="/dashboard"
            >
              <FaUser />
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 flwx justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menueItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menueItem}</ul>
      </div>
      <label
        htmlFor="Dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
