import "./header.scss";
import CartWidget from "../cart_widget/CartWidget";

const Header = () => (
  <header>
    <h1>WCYD</h1>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  </header>
);

export default Header;
