import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => (
  <>
    <h2>{greeting}</h2>
    <ItemList />
  </>
);

export default ItemListContainer;
