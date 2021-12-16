import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";

const App = () => (
  <>
    <Header />
    <ItemListContainer greeting="HELLO!" />
    <ItemCount stock={20} initial={1} />
  </>
);
export default App;
