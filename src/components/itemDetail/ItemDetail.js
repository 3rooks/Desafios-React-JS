import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ dataState }) => {
  const { title, price, image, description } = dataState;
  const [added, setAdded] = useState(false);

  const onAdd = (quantity) => {
    setAdded(true);
    console.log(quantity);
  };

  return (
    <div>
      <img src={image} />
      <p>
        <i>Product:</i> <b>{title}</b>
      </p>
      <p>
        <i>Price: $</i>
        <b>{price}</b>
      </p>
      <p>
        <i>Description:</i> <b>{description}</b>
      </p>
      {added ? (
        <Link to="/Cart">
          <button>Go to Cart</button>
        </Link>
      ) : (
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
