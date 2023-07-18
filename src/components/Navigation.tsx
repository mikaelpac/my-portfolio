import Link from "next/link";
import {AiFillHome} from "react-icons/ai"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-indigo-950 text-white pl-8 pr-8">
      <div>
        <Link  legacyBehavior href="/">
          <a className="hover:text-yellow-500 transition-colors ease-in-out items-center ml-2 flex gap-3" ><AiFillHome size={32}/> Home </a>
        </Link>
      </div>
      <ul className="flex items-center space-x-4 ">
        <li>
          <Link legacyBehavior href="/about">
            <a className="hover:text-yellow-500 transition-colors ease-in-out ml-5">About</a>
          </Link>
        </li>
        <li>
            <button className="bg-yellow-500 hover:bg-white-700 font-bold transition ease-in-out hover:scale-110 transform  text-black py-2 px-4 rounded">
          <Link legacyBehavior href="/contact">
            <a className="">Connect</a>
          </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;