import { useContext } from "react";
import { Link } from "react-router-dom";
import { CONTEXT } from "../../App";
import "./cartWidget.scss";

const CartWidget = () => {
  const { total_quantity } = useContext(CONTEXT);
  console.log(total_quantity);
  return (
    <Link to="/Cart" className="shop_cart">
      <img src="/shopping_cart.svg" />
      <span>{total_quantity}</span>
    </Link>
  );
};

export default CartWidget;
