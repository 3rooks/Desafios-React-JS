import Item from "../item/Item";

const ItemList = ({ dataState }) => {
  return (
    <div>
      {dataState !== undefined
        ? dataState.results.map((e) => {
            console.log(dataState);
            return <Item item={e} />;
          })
        : console.log(dataState)}
    </div>
  );
};

export default ItemList;
