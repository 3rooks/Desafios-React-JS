const ItemDetail = ({ dataState }) => {
  const { title, price, image, description } = dataState[0];
  return (
    <div>
      <img src={image} />
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default ItemDetail;
