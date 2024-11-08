
import { createSlice } from '@reduxjs/toolkit'
import { PokemonModel } from '../../shared/pokemon.model'

interface PokemonStateModel {
    totalCount: number;
    pokemonList: PokemonModel[];
}

const initialPokemonState: PokemonStateModel ={
    totalCount : 0,
    pokemonList: []

} 

//estado inicial y reducers 
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialPokemonState,
  reducers: {
    //para iniciar el listado completo
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
      state.totalCount = action.payload.length;
    },
    updatePokemonReadyStatus: (state, action) => {
      const { pokemonId, readyToBattleStatus } = action.payload;
      //buscamos el index del pokemon por medio del id
      const pokemonIndex = state.pokemonList.findIndex(p => p.id === pokemonId);
      
      //atraves del index actualizamos su estado
      if (pokemonIndex !== -1) {
        state.pokemonList[pokemonIndex].readyToBattle = readyToBattleStatus;
      }
    }
  }
})

//exportando reducer setPokemon
//actions creators
export const {setPokemonList, updatePokemonReadyStatus} = pokemonSlice.actions

//exportando reducer
export default pokemonSlice.reducer