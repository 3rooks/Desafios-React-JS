const Item = ({ e }) => {
  return (
    <div key={e.id}>
      <p>
        {e.name} - {e.gender}
      </p>
      <img src={e.image} />
    </div>
  );
};

export default Item;
