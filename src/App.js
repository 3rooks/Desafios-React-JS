import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

export const CONTEXT = createContext({
  cart: [],
  total_price: 0,
  total_quantity: 0,
});
const { Provider, Consumer } = CONTEXT;
console.log(CONTEXT);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/Category/:id" element={<ItemListContainer />} />
      <Route path="/Item/:id" element={<ItemDetailContainer />} />
      {/* <Routes path="/Cart" element="" /> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
);
export default App;
