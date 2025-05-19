import { Link } from "react-router-dom";

function Menu() {
  return (
    <header className="bg-blue-700 text-white shadow-sm border-b">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight transition-colors duration-300 hover:text-white">
          <Link to="/">Jakub Wiszowaty</Link>
        </h1>
        <ul className="flex space-x-4 sm:space-x-6 text-md sm:text-lg font-medium tracking-wide">
          <li>
            <Link
              to="/"
              className="hover:text-orange-100 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-orange-100 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text- transition-colors duration-300"
            >
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
