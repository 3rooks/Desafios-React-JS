import { Link } from "react-router-dom";
import "./header.scss";
import CartWidget from "../cart_widget/CartWidget";

const Header = () => (
  <header>
    <h1>WCYD</h1>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  </header>
);

export default Header;
