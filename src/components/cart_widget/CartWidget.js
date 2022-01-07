import { Link } from "react-router-dom";
import "./cartWidget.scss";

const CartWidget = () => (
  <Link to="/Cart" className="shop_cart">
    <img src="/shopping_cart.svg" />
  </Link>
);

export default CartWidget;
