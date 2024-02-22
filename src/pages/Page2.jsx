// import React from 'react'
import { Link } from "react-router-dom";
import "./Page2.css";
import mulahLogo from "../assets/mulahlogo.jpeg";
import { Container } from "react-bootstrap";

const Page2 = () => {
  return (
    <Container>
      <div className="container-sm my-5">
        <div className="logo-container mb-4">
          <img src={mulahLogo} alt="logo" />
        </div>
        <div className="mobile-container">
          <div className="registration my-2">
            <h2 className="text-muted">Registration</h2>
          </div>
          <div className="subtext">
            <h4>Please fill up your details</h4>
          </div>
          <div className="input mb-4">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="input mb-4">
            <input type="date" placeholder="DD/MM/YYYY" />
          </div>
          <div className="input mb-4">
            <input type="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="ms-2" />
          <p className="ms-4">No Email Address</p>
        </div>
        <div className="bottom-container">
          <Link to="/Page3">
            <button className="my-4">Continue</button>
          </Link>
          <div className="extra-text mt-5">
            <p className="text-muted">
              Powered by <span className="text-primary">Mulah Rewards</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page2;
