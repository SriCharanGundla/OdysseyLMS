import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
    });

    const { name, email, password, rePassword } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== rePassword) {
            // Display an error message or handle password mismatch
            alert("Passwords do not match");
            return;
        }

        console.log(formData);


        Axios.post("http://localhost:5000/api/users/register", {
          name,
          email,
          password,
        }).then((response) => {
            console.log(response);
            alert("Registration successful");
            navigate("/login");
        }).catch((error) => {
            console.log(error);
            alert("Registration failed");
        });

    };

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-16 mx-auto flex flex-wrap items-center">
                <form onSubmit={handleSubmit} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                        Sign Up
                    </h2>
                    <div class="relative mb-4">
                        <label
                            for="full-name"
                            class="leading-7 text-sm text-gray-600"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="email"
                            class="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="password"
                            class="leading-7 text-sm text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="re-password"
                            class="leading-7 text-sm text-gray-600"
                        >
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            id="re-password"
                            name="rePassword"
                            value={rePassword}
                            onChange={handleChange}
                            class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        class="text-white rounded-md bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    >
                        Sign Up
                    </button>
                    <p class="text-xs text-gray-500 mt-3">
                        Already have an account?{" "}
                        <Link to="/login" class="text-blue-500">
                            Login here.
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Register;
