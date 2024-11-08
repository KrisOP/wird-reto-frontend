
import "./App.css";
import { Home } from "./pages/home"; "../src/pages/index";
import { Route, Routes } from "react-router-dom";
import { PokemonDetail } from "./pages/pokemonDetails";
import { Navbar } from "./components/navbar";
//import { useSelector } from "react-redux";

function App() {

  //const {namePokemon} = useSelector((state: store) => state.pokemon);

  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/pokemon-detail" element={<PokemonDetail/>}/> 
      </Routes>
    </div>
     
    </>
  );
}

export default App;
