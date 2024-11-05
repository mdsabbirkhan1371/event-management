import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/assets/small-pic/logo.png";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const naveLinks = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/events">EVENTS</NavLink>
      </li>
      <li>
        <NavLink to="/speaker">SPEAKERS</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naveLinks}
            {/* Display Login/Logout button in the dropdown */}
            {user?.emailVerified ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-secondary font-extrabold w-full"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="btn btn-outline btn-secondary font-extrabold w-full">
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          id="sidebar"
          className="menu menu-horizontal px-1 font-bold hover:text-blue-700"
        >
          {naveLinks}
        </ul>
      </div>
      {/* Keeping the navbar-end div for larger screens */}
      <div className="navbar-end hidden lg:flex">
        {user?.emailVerified ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-secondary font-extrabold"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline px-10 btn-secondary font-extrabold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
