import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cyan-700">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between nav-height bungee items-center">
          <Link to="/" className="flex-shrink-0">
            <div className="hidden md:block text-white text-2xl ml-3">
              Jess Barrett
            </div>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white bg-cyan-800 border-2 rounded-md drop-shadow hover:-translate-y-1 hover:drop-shadow-lg text-2xl px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-white bg-cyan-800 border-2 rounded-md drop-shadow hover:-translate-y-1 hover:drop-shadow-lg text-2xl px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/Resume"
              className="text-white bg-cyan-800 border-2 rounded-md drop-shadow hover:-translate-y-1 hover:drop-shadow-lg text-2xl px-3 py-2"
            >
              Resume
            </Link>
            <Link
              to="/Projects"
              className="text-white bg-cyan-800 border-2 rounded-md drop-shadow hover:-translate-y-1 hover:drop-shadow-lg text-2xl px-3 py-2"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
