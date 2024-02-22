// import React from 'react'
import "./Page3.css";
import mulahLogo from "../assets/mulahlogo.jpeg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <Container>
      <div className="container-sm my-5">
        <div className="mobile-container">
          <div className="logo-container mb-4">
            <img src={mulahLogo} alt="logo" />
          </div>
          <div className="user-container p-4">
            <p className="my-5">Name: </p>
            <p className="my-5">Birthday: </p>
            <p className="my-5">Email: </p>
            <p className="my-5">Phone Number:</p>
          </div>
          <Link to="/">
            <button className="my-4">Back to Page 1</button>
          </Link>
          <div className="extra-text mt-4">
            <p className="text-muted">
              Powered by <span className="text-primary">Mulah Rewards</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page3;
