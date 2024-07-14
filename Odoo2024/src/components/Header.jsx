import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const renderNavbarContent = () => {
    const { pathname } = location;

    if (pathname === "/") {
      return (
        <button className="btn btn-outline-primary" type="button">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </button>
      );
    } else if (pathname === "/login") {
      return (
        <Link to="/" className="btn btn-outline-primary me-2">
          Home
        </Link>
      );
    } else if (pathname === "/user" || pathname === "/user/search") {
      return (
        <div className="d-flex align-items-center">
          {/* Notification bell icon */}
          <i className="bi bi-bell me-2">
            <span className="badge bg-secondary">3</span>
          </i>

          <Link to="" className="btn btn-outline-primary me-2">
            Sign Out
          </Link>
          {/* Example notification count */}
        </div>
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="BookLogo.png"
            alt="Bootstrap"
            width="36"
            height="36"
            className="d-inline-block align-text-top "
          />
          Public Library
        </a>
        {renderNavbarContent()}
      </div>
    </nav>
  );
};

export default Header;
