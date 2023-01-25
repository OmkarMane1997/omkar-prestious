import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Home.css";
function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>Home</h1>
      </div>
      <div className="row mt-5">
        <div className="col-6	col-sm-6 col-md-6	col-lg-6 col-xl-6 ">
          <div className="card text-center">
            <div className="card-body">
              <NavLink to={"/About"} className="link">
                About
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-6	col-sm-6 col-md-6	col-lg-6 col-xl-6 ">
          <div className="card text-center">
            <div className="card-body">
              <NavLink to={"/HeadAndTail"} className="link">
                Head & Tail
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
