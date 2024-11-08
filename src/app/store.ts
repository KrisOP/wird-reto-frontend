import { configureStore } from "@reduxjs/toolkit";

// importantdo Reducers
import pokemonReducer from "../features/pokemons/pokemonSlice";

const store = configureStore({
    //estado pokemons utiliza el reducer pokemonReducer
reducer: {
    pokemons: pokemonReducer
}
}) 


 export default store;
//export type RootState = ReturnType<typeof store.getState>;