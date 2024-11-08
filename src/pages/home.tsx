import { useDispatch, useSelector } from "react-redux";
import { PokemonList } from "../components/pokemonList";
import { setPokemonList } from "../reducers/pokemons/pokemonSlice";
import { PokemonModel } from "../shared/pokemon.model";
import Axios from "axios";

import { useState, useEffect } from "react";
import { RootState } from "../app/store";

export const Home = () => {
  //inicializando lista de pokemons
  //const [pokemons, setPokemons] = useState<PokemonModel[]>([]);

  const dispatch = useDispatch();
  //const pokemonsList = useSelector((state: any) => state.pokemon.pokemonList);
  const { pokemonList } = useSelector(
    (state: RootState) => state.pokemonList
  );

  //obtener primeros 151 pokemons de PokeApi
  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(
      async (response) => {
        const basicPokemons = response.data.results;
        // Usar Promise.all para obtener detalles adicionales para cada Pokémon
        const allPokemons = await Promise.all(
          basicPokemons.map(async (pokemon: { name: string; url: string; readyToBattle:boolean }) => {
            const details = await Axios.get(pokemon.url);
            return {
              name: pokemon.name,
              id: details.data.id,
              urlImage: details.data.sprites.front_default,  // Obtiene la imagen desde los detalles
              readyToBattle:false
               
            };
          })
        );

        //setPokemons(allPokemons);
        //actualizando el listadoInicial
        dispatch(setPokemonList(allPokemons));
      }
    );
  }, [dispatch]);

//   useEffect(() => {
//     console.log("Estado actual de pokemons:", pokemons);
//   }, [pokemons]);
  //const pokemons: PokemonModel[] = []
  return (
    <>
      <PokemonList pokemons={pokemonList} />
    </>
  );
};
