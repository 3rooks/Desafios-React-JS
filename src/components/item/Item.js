import { useState, useEffect } from "react";
import ItemCount from "../itemCount/ItemCount";
import "./item.scss";

const Item = () => {
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
    <div className="grid-container">
      {character !== undefined
        ? character.results.map((e) => {
            return (
              <div key={e.id}>
                {e.name} - {e.gender}
                <img src={e.image} />
                <ItemCount stock={20} initial={1} />
              </div>
            );
          })
        : console.log("IDK")}
    </div>
  );
};

export default Item;
