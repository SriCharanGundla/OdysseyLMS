import {React, useState} from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: "",

});

const { email, password} = formData;

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // const loginURL = "http://localhost:5000/api/users/login"
    const loginURL = "https://odyssey-backend.onrender.com/api/users/login";

    Axios.post(loginURL, {
      email,
      password,
    }).then((response) => {
        console.log(response);
        alert("Login successful");
        navigate("/");
    }).catch((error) => {
        alert("Login failed");
        console.log(error);
    });

};

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white rounded-md bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Login
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
