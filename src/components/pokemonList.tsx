import { PokemonModel } from "../shared/pokemon.model";
import { CgAdd } from "react-icons/cg";

export const PokemonList = ({ pokemons }: { pokemons: PokemonModel[] }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {pokemons.map((pokemon) => {
          return (
            <>
              <div
                key={pokemon.name}
                className="w-full max-w-sm min-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-end px-4 pt-4">
                  <button
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="Icon IconAddToBattle">
                      <CgAdd />
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
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
