
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removePokemonToBattle } from "../../reducers/pokemonsToBattle/pokemonToBattleSlice";
import { updatePokemonReadyStatus } from "../../reducers/pokemons/pokemonSlice";
import { CgAdd,CgTrashEmpty } from "react-icons/cg";
export const PokemonToBattleList = ()=>{
    //accediendo al reducer
  const { pokemonsToBattleList } = useSelector(
    (state: RootState) => state.pokemonToBattle
  );
  const dispatch = useDispatch();
  const handleAddOrRemovePokemonToBattle = (pokemonId: number) => {

    //agregar o quitar al store (pokemon de la lista de batalla)
    if (pokemonsToBattleList.find((pokemon) => pokemon.id === pokemonId)) {
        
      dispatch(removePokemonToBattle(pokemonId));
      //actualizando del listado principal el estado
      dispatch(updatePokemonReadyStatus({ 
        pokemonId: pokemonId, 
        readyToBattleStatus: false 
      }));
      
    } else {
          dispatch(updatePokemonReadyStatus({ 
            pokemonId: pokemonId, 
            readyToBattleStatus: true 
          })); 
    }
  };
  return (
    <>
    <div className="mt-6 ml-4">
<div className="w-full max-w-md p-4 bg-green-100 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Listos para el combate</h5>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
           
            {pokemonsToBattleList.length === 0 ? (
              <div className="text-center p-4">
                
                <p className="text-gray-500 dark:text-gray-400 mb-7">
                  No hay Pokémon listos para la batalla
                </p>
                <span className="text-4xl mt-5">🏹</span>
              </div>
            ) : (
        
              pokemonsToBattleList.map((pokemon) => {
                return (
                  <div
                    key={pokemon.id}
                    className="w-full max-w-sm min-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
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
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src={pokemon.urlImage}
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {pokemon.name}
                      </h5>
        
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        
                      </span>
                    </div>
                  </div>
                );
              })
            )}
            </li>
            
        </ul>
   </div>
</div>
     </div>
    </>
    
  );
}