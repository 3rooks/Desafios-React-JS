import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  let URL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const ID = useParams();
  const { id } = ID;

  useEffect(() => {
    id
      ? (URL = `https://fakestoreapi.com/products/category/${id}`) // PRODUCTOS FILTRADOS POR CATEGORIAS
      : (URL = "https://fakestoreapi.com/products"); //TODOS LOS PRODUCTOS

    fetch(URL)
      .then((res) => res.json())
      .then((res) => setProducts(res), setLoading(true))
      .catch((error) => console.log(error));
  }, [ID]);

  if (!loading) {
    return <h1>Loading!...</h1>;
  } else {
    return (
      <>
        <h2>{greeting}</h2>
        <ItemList dataState={products} />
      </>
    );
  }
};

export default ItemListContainer;
