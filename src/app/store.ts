import { configureStore } from "@reduxjs/toolkit";

// importantdo Reducers
import pokemonReducer from "../reducers/pokemons/pokemonSlice";
import pokemonToBattleReducer from '../reducers/pokemonsToBattle/pokemonToBattleSlice';

const store = configureStore({
    //estado pokemons utiliza el reducer pokemonReducer
reducer: {
    pokemons: pokemonReducer,
    pokemonToBattle: pokemonToBattleReducer,
}
}) 


 export default store;
//export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;