import { Link } from "react-router-dom";
import "./Page1.css";
import mulahLogo from "../assets/mulahlogo.jpeg";
import { Container } from "react-bootstrap";

const Page1 = () => {
  return (
    <Container>
      <div className="container-sm my-5">
        <div className="mobile-container">
          <div className="logo-container mb-4">
            <img src={mulahLogo} alt="logo" />
          </div>
          <div className="greetings my-5">
            <h2 className="">
              Hello,<br></br>Welcome!
            </h2>
          </div>
          <div className="subtext">
            <p>Check Your Loyalty Points & Rewards</p>
          </div>
          <div className="input mb-3">
            <input type="text" placeholder="Enter your mobile number" />
          </div>
          <Link to="/Page2">
            <button className="my-4">Check Loyalty Points</button>
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

export default Page1;
