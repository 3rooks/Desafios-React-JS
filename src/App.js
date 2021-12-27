import Header from "./components/header/Header";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/itemCount/ItemCount";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

const App = () => (
  <>
    <Header />
    <ItemListContainer greeting="HELLO!" />
    <ItemCount stock={20} initial={1} />
    <ItemDetailContainer />
  </>
);
export default App;
