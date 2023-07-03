import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-removebg.png";
const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img src={Logo} alt="Logo" style={{ width: "150px" }} />
        </Link>
        <nav class="md:m-auto flex flex-wrap items-center text-base justify-center">
          <Link class="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          <Link class="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>
          <Link class="mr-5 hover:text-gray-900" to="/courses">
            Explore Courses
          </Link>
          <Link class="mr-5 hover:text-gray-900" to="/createcourse">
            Create Course
          </Link>

          <Link class="mr-5 hover:text-gray-900" to="/contact">
            Contact Us
          </Link>
        </nav>
        <Link to="register">
          <button class="inline-flex items-center rounded-md text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
            Sign Up
          </button>
        </Link>
        <Link to={`login`}>
          <button class="ml-4 inline-flex items-center rounded-md text-white bg-orange-500 border-0  py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
