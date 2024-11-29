import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import './App.css'

function App() {

  return (
    
      <div>
        <NavBar />
        <ItemListContainer saludo={"Bienvenidos a PicuTIENDA"} />
      </div>
  )
}

export default App