import React from "react";
import restro from "../images/restro.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div class="row justify-content-around px-5 mt-5">
        <div className="col-lg-4">
          <img
            src={restro}
            className="object-fit-cover"
            width="600"
            height="400"
          ></img>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="justify-content-center">
            <div className="card bg-body-secondary border rounded-4 border-2 border-success px-1 py-2 text-success">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                      id="password"
                      placeholder="Enter your password"
                    />
                    <nav className="mt-2 text-center">
                      <Link to=""
                      className="text-decoration-none text-success"
                      >Forget password?</Link>
                    </nav>
                  </div>
                  <div className="text-center">
                    <button type="submit" class="btn btn-success rounded-pill">
                      Login
                    </button>
                  </div>
                </form>
                <nav className="mt-2 text-center">
                  <Link to="/Signup"
                    className="text-decoration-none text-success"
                  >
                    Register for an account
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
