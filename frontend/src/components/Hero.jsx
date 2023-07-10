import React from "react";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Master Skills &
                        <br className="hidden lg:inline-block" />
                        Learn from Experts
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Our Online Learning Platform offers expert-led courses
                        to master new skills. Join us now to achieve your goals
                        through interactive methods, 24/7 access and community
                        support.
                    </p>
                    <div className="flex justify-center">
                        <a href="register">
                            <button className="inline-flex rounded-md text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Sign Up
                            </button>
                        </a>
                        <a href="login">
                            <button className="ml-4 inline-flex rounded-md text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                Login
                            </button>
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://img.freepik.com/free-vector/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-platform-e-learning-platform-online-teaching-concept_335657-795.jpg?w=900&t=st=1688369245~exp=1688369845~hmac=d28ece6242af926baaf64d190c23e77d5e136a63601403636082853c9099c960"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
