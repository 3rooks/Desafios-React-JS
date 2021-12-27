const ItemDetail = (dataState) => {
  return dataState.dataState.map((e) => {
    return (
      <div key={e.id}>
        <p>{e.title}</p>
        <img src={e.image} />
      </div>
    );
  });
};

export default ItemDetail;
