import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const URL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState();

  const GET_DATA = async () => {
    const DATA = await fetch(URL);
    const DATA_JSON = await DATA.json();
    setProduct(DATA_JSON);
  };

  useEffect(() => {
    GET_DATA();
  }, []);

  return (
    <div>
      <ItemDetail dataState={product} />
    </div>
  );
};

export default ItemDetailContainer;
