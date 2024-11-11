
import { createSlice } from '@reduxjs/toolkit'
import { PokemonModel } from '../../shared/pokemon.model'

interface PokemonStateModel {
    totalCount: number;
    pokemonList: PokemonModel[];
    filteredPokemonList: PokemonModel[]; 
}

const initialPokemonState: PokemonStateModel ={
    totalCount : 0,
    pokemonList: [],
    filteredPokemonList: []

} 

//estado inicial y reducers 
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialPokemonState,
  reducers: {
    //para iniciar el listado completo y los filtrados para busqueda (sobre filteredPokemonList, se iterara para buscar)
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
      state.filteredPokemonList =state.pokemonList;
      state.totalCount = action.payload.length;
    },
    updatePokemonReadyStatus: (state, action) => {
      const { pokemonId, readyToBattleStatus } = action.payload;
      //buscamos el index del pokemon por medio del id
      const pokemonIndex = state.filteredPokemonList.findIndex(p => p.id === pokemonId);
      
      //atraves del index actualizamos su estado
      if (pokemonIndex !== -1) {
        state.filteredPokemonList[pokemonIndex].readyToBattle = readyToBattleStatus;
      }
    },

    searchPokemons: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === '') {
        state.filteredPokemonList = state.pokemonList;
      } else {
        state.filteredPokemonList = state.pokemonList.filter(pokemon => 
          pokemon.name.toLowerCase().includes(searchTerm)
        );
      }
    }
  }
})

//exportando reducer setPokemon
//actions creators
export const {setPokemonList, updatePokemonReadyStatus, searchPokemons } = pokemonSlice.actions

//exportando reducer
export default pokemonSlice.reducer