import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand fs-2 fw-bold text-success">
              Restro
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-2 text-success">
                <FontAwesomeIcon
                  icon={faPercent}
                  style={{ color: "#198754" }}
                  size="lg"
                  className="me-2"
                />
                Offers
              </li>
              <li className="nav-item me-3 text-success">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#198754" }}
                  size="lg"
                  className="me-2"
                />
                Cart
              </li>
              <li className="nav-item me-3 text-success">
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#198754" }}
                  size="lg"
                  className="me-2"
                />
                Name
              </li>
              {localStorage.getItem("isLoggedIn") ? (
                <>
                  <li className="nav-item">Add New Product</li>
                  <li className="nav-item">View Product</li>
                  <li className="nav-item me-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#198754" }}
                      size="lg"
                      className="me-1"
                    />
                    Name
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-danger">Logout</button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to="/Login"
                    className="icon text-decoration-none text-success"
                    style={{ padding: 5 }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#198754" }}
                      size="lg"
                      className="me-1"
                    />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
