import { PokemonList } from "../components/pokemonList";
import { PokemonModel } from "../shared/pokemon.model";
import Axios from "axios";

import { useState, useEffect } from "react";

export const Home = () => {
  //inicializando lista de pokemons
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);

  //obtener primeros 151 pokemons de PokeApi
  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(
      async (response) => {
        const basicPokemons = response.data.results;
        // Usar Promise.all para obtener detalles adicionales para cada Pokémon
        const detailedPokemons = await Promise.all(
          basicPokemons.map(async (pokemon: { name: string; url: string }) => {
            const details = await Axios.get(pokemon.url);
            return {
              name: pokemon.name,
              urlImage: details.data.sprites.front_default, // Obtiene la imagen desde los detalles
            };
          })
        );

        setPokemons(detailedPokemons);
        //setPokemons(detailedPokemons)
      }
    );
  }, []);

  useEffect(() => {
    console.log("Estado actual de pokemons:", pokemons);
  }, [pokemons]);
  //const pokemons: PokemonModel[] = []
  return (
    <>
      <PokemonList pokemons={pokemons} />
    </>
  );
};
