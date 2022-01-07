import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h2>{greeting}</h2>
      <ItemList dataState={products} />
    </>
  );
};

export default ItemListContainer;
