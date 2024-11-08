import { createSlice } from '@reduxjs/toolkit'
import { PokemonModel } from '../../shared/pokemon.model'

interface PokemonStateModel {
    totalCount: number;
    pokemonsToBattleList: PokemonModel[];
}

//estado inicial de listado de pokemones a combatir
const initialPokemonToBattleState: PokemonStateModel ={
    totalCount : 0,
    pokemonsToBattleList: []

} 

//estado inicial y reducers 
const pokemonToBattleSlice = createSlice({
  name: 'pokemonToBattle',
  initialState: initialPokemonToBattleState,
  reducers: {
    addPokemonToBattle : (state, action) => {
      if (state.totalCount >= 6) {
        return; // No permite agregar más pokemones si ya hay 6
      }
        state.pokemonsToBattleList= [...state.pokemonsToBattleList, action.payload];
        state.totalCount +=1;
    },
    removePokemonToBattle : (state, action) => {
        const pokemonId = action.payload;
        state.totalCount -= 1;
        //filtrar y devolver todos los pokemones excluyendo el pokemon a buscar (pokemonId seleccionado)
        state.pokemonsToBattleList = state.pokemonsToBattleList.filter(pokemon => pokemon.id !== pokemonId);

    }
  }
})

//exportando reducer setPokemon
//actions creators
export const { addPokemonToBattle, removePokemonToBattle} = pokemonToBattleSlice.actions

//exportando reducer
export default pokemonToBattleSlice.reducer