import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="navMenu">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/shortlisted">
            Shortlist
          </Link>
          <Link className="navLink" to="/rejected">
            Rejected
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
