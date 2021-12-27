const Item = ({ item }) => {
  return (
    <div>
      <p>
        {item.name} - {item.gender}
      </p>
      <img src={item.image} />
    </div>
  );
};

export default Item;
