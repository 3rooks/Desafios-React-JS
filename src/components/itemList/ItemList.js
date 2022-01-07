import Item from "../item/Item";
import "./itemList.scss";

const ItemList = ({ dataState }) => {
  return (
    <div className="grid-container">
      {dataState.map((e) => {
        return <Item key={e.id} item={e} />;
      })}
    </div>
  );
};

export default ItemList;
