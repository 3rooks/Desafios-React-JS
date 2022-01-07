import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, description, image } = item;
  return (
    <div>
      <p>
        <i>Product:</i> <b>{title}</b>
      </p>
      <p>
        <i>Price: $</i>
        <b>{price}</b>
      </p>
      <img src={image} />
      <Link to={"/Item/" + id}>
        <button>See More</button>
      </Link>
    </div>
  );
};

export default Item;
