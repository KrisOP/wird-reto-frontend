import pokeball from "/img/pokeball.png";
import wirdLogo from "/img/wird-logo.jpg";
import { ImGithub } from "react-icons/im";
import './navbar.css'

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse text-slate-800"
          >
            <img src={pokeball} className="w-11" alt="Pokeball Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokédex
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 hover:text-green-300 flex justify-center items-center" target="_blank" href="https://github.com/KrisOP/wird-reto-frontend" > <ImGithub className="mr-2"/> Repositorio</a>
            <a href="https://www.wird.ai/" className="w-9 rounded-full ml-3" target="_blank">
              <img className="rounded-full" src={wirdLogo} />
            </a>
           
          </div>
          
        </div>
      </nav>
    </>
  );
};
