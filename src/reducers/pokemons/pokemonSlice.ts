
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
    setPokemon : (state, action) => {
        state.pokemonList= [...state.pokemonList, action.payload];
        state.totalCount +=1;

    }
  }
})

//exportando reducer setPokemon
//actions creators
export const { setPokemon} = pokemonSlice.actions

//exportando reducer
export default pokemonSlice.reducer