import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div>
        <Link  legacyBehavior href="/">
          <a className="hover:text-gray-300">Home</a>
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link legacyBehavior href="/about">
            <a className="hover:text-gray-300">About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a className="hover:text-gray-300">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;