import React from "react";
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
          <a className="navbar-brand" href="#">
            Palisade
          </a>
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
                  <a className="nav-link" href="#">
                    MyPosts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Followingposts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    UploadPost
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LogIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Signup
                  </a>
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
