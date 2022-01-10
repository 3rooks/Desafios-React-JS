import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.scss";
import CartWidget from "../cart_widget/CartWidget";

const Header = () => {
  const URL = "https://fakestoreapi.com/products/categories";
  const [categories, setCategories] = useState([]);

  fetch(URL)
    .then((res) => res.json())
    .then((res) => setCategories(res))
    .catch((error) => console.log(error));

  return (
    <header>
      <Link to="/">
        <h1>WCYD</h1>
      </Link>
      <nav>
        <ul className="nav-list">
          {categories.map((e) => {
            return (
              <li className="nav-item" key={e}>
                <Link className="nav-link" to={"Category/" + e}>
                  {e}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export default Header;
