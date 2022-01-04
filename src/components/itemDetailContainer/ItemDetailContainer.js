import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const URL = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemDetail dataState={product} />
    </div>
  );
};

export default ItemDetailContainer;
