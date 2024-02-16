import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import notify from "../Other Components/Notification";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { mode, toggleMode } = props;
  const authToken = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    notify("Logout successfully", "success", `${props.mode === "light" ? "light" : "dark"}`);
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg text-${mode === "light" ? "dark" : "light"
          }`}
        style={{backgroundColor: `${mode === "light" ? "#bfbfbf" : "black"}`}}
      >
        <div className="container-fluid">
          <Link className="nav-link mx-3" to="/" style={{ fontSize: "20px" }}>
            <b>Global Glimpse</b>
          </Link>
          <button
            className={`navbar-toggler bg-${mode === "dark" ? "light" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-${mode === "light" ? "dark" : "light"
                    }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
            {!authToken && (
              <>
                <Link className={`nav-link mx-2 text-${mode === "light" ? "dark" : "light"
                    }`} to={`/SignUp`}>
                    SignUp
                </Link>
                <Link className={`nav-link mx-2 text-${mode === "light" ? "dark" : "light"
                    }`} to={`/Login`}>
                    Login
                </Link>
              </>
            )}

            {authToken && (
              <Link className={`nav-link mx-2 text-${mode === "light" ? "dark" : "light"
            }`} to={`/`} onClick={handleLogout}>
                  Log Out
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
