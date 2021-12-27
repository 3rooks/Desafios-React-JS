import Item from "../item/Item";
import "./itemList.scss";

const ItemList = ({ dataState }) => {
  return (
    <div className="grid-container">
      {dataState !== undefined
        ? dataState.results.map((e) => {
            return <Item item={e} key={e.id} />;
          })
        : console.log(dataState)}
    </div>
  );
};

export default ItemList;
