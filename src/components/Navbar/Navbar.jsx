import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="cont">
      <div className="container">
        <div className="logo">
          <h1 style={{ fontFamily: "Benzin-Medium" }}>Sweat</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/previous-courses">Modules</Link>
            </li>
            <li>
              <Link to="/select-course">Input Modules</Link>
            </li>
            <li>
              <Link to="/simulations">Simulations</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
