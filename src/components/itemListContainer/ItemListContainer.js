import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const URL = "https://rickandmortyapi.com/api/character";
  const [character, setCharacter] = useState();

  const GET_DATA = async () => {
    const DATA = await fetch(URL);
    const DATA_JSON = await DATA.json();
    setCharacter(DATA_JSON);
  };

  useEffect(() => {
    GET_DATA();
  }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <ItemList dataState={character} />
    </>
  );
};

export default ItemListContainer;
