import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ dataState }) => {
  const { title, price, image, description } = dataState;
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
      <ItemCount stock={10} initial={1} />
      <button>Add to Cart</button>
    </div>
  );
};

export default ItemDetail;
