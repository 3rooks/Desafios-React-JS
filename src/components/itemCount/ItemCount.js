import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCount] = useState(initial);

  const increase = () => {
    // if (counter === stock) {
    //   setCount(stock);
    // } else {
    //   setCount(counter + initial);
    // }
    counter === stock ? setCount(stock) : setCount(counter + initial);
  };

  const decrease = () => {
    // if (counter === initial) {
    //   setCount(initial);
    // } else {
    //   setCount(counter - initial);
    // }
    counter === initial ? setCount(initial) : setCount(counter - initial);
  };

  const confirm = () => {
    onAdd(counter);
  };

  return (
    <div>
      <h3>Quantity of Products: {counter}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={confirm}>Confirm</button>
    </div>
  );
};

export default ItemCount;
