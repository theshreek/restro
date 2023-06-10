import React from "react";
import restro from "../images/restro.jpg";

const Signup = () => {
  return (
    <div class="row justify-content-around px-5 mt-5">
      <div className="col-lg-4">
        <img
          src={restro}
          className="object-fit-cover"
          width="600"
          height="400"
        ></img>
      </div>
      <div className="col-lg-4 mt-3">
        <div className="justify-content-center">
          <div className="card bg-body-secondary border rounded-4 border-2 border-success px-1 py-2 text-success">
            <div className="card-body">
              <h3 className="card-title text-center">Signup</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                    placeholder="New Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control bg-light border rounded-3 border-1 border-success px-1 py-2 text-success"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" class="btn btn-success rounded-pill">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
