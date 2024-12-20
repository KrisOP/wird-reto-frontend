import { configureStore } from "@reduxjs/toolkit";

// importantdo Reducers
import pokemonListReducer from "../reducers/pokemons/pokemonSlice";
import pokemonToBattleReducer from '../reducers/pokemonsToBattle/pokemonToBattleSlice';

const store = configureStore({
    //estado pokemons utiliza el reducer pokemonReducer
reducer: {
    pokemonList: pokemonListReducer,
    pokemonToBattle: pokemonToBattleReducer,
    filteredPokemonList: pokemonListReducer,
}
}) 


 export default store;
//export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;