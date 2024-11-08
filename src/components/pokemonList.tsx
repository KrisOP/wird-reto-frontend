import { PokemonModel } from "../shared/pokemon.model";
import { CgAdd,CgTrashEmpty } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemonToBattle,
  removePokemonToBattle,
} from "../reducers/pokemonsToBattle/pokemonToBattleSlice";
import { updatePokemonReadyStatus } from "../reducers/pokemons/pokemonSlice";
import { RootState } from "../app/store";

export const PokemonList = ({ pokemons }: { pokemons: PokemonModel[] }) => {
  //accediendo al reducer
  const { pokemonsToBattleList } = useSelector(
    (state: RootState) => state.pokemonToBattle
  );

  const dispatch = useDispatch();
  const handleAddOrRemovePokemonToBattle = (pokemonId: number) => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === pokemonId);

    //agregar o quitar al store (pokemon de la lista de batalla)
    if (pokemonsToBattleList.find((pokemon) => pokemon.id === pokemonId)) {
        
      dispatch(removePokemonToBattle(pokemonId));
      //actualizando del listado principal el estado
      dispatch(updatePokemonReadyStatus({ 
        pokemonId: pokemonId, 
        readyToBattleStatus: false 
      }));
      
    } else {
        //dispatch(addPokemonToBattle(pokemon));
        dispatch(addPokemonToBattle({
            ...pokemon,
            readyToBattle: true
          }));
          dispatch(updatePokemonReadyStatus({ 
            pokemonId: pokemonId, 
            readyToBattleStatus: true 
          }));
    }
  };
  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {pokemons.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="w-full max-w-sm min-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                className={`btn ${
                    pokemon.readyToBattle
                    ? "  inline-block text-red-700 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    :  "inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                }`}
                type="button"
                onClick={() => handleAddOrRemovePokemonToBattle(pokemon.id)}
              >
                <span className="Icon IconAddToBattle">
                  {pokemonsToBattleList.find((pdt) => pdt.id === pokemon.id) ? (
                     <CgTrashEmpty />
                  ) : (
                    <CgAdd />
                  )}
                  
                </span>
              </button>
            </div>
            <div className="flex flex-col items-center pb-5">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={pokemon.urlImage}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {pokemon.name}
              </h5>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                {pokemon.id}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
