import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "../pages/Toolbar";
const Header = () => {
  const auth = true;
  return (
    <div style={{ display: "inline" }}>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="">
          <Link className="navbar-brand" to="/">
            Palisade
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {auth ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/followingposts">
                    Followingposts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createpost">
                    UploadPost
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LogIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {auth ? <Toolbar /> : null}
    </div>
  );
};
export default Header;
