import React from "react";
import { motion } from "framer-motion";
import planetsImage from "../assets/planets.jpeg";
import NavBar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <NavBar />
    <div
      className="pt-[72px] overflow-hidden bg-cover bg-center px-4 mx-auto"
      style={{ backgroundImage: `url(${planetsImage})` }}
      id="hero"
    >
      
      <div className="container relative z-10 bg-black bg-opacity-50 flex flex-col gap-2 justify-center items-center h-[calc(100vh-72px)] mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.45, duration: 1 }}
          className="hero__title text-center text-2xl md:text-3xl lg:text-4xl font-semibold items-center gap-2 text-white"
        >
          Embark on a Cosmic Journey with
          <span className="font-secondary ms-2">
            Space
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
              One
            </span>
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.45, duration: 1 }}
          className="hero__description text-center mt-3 md:mt-5 md:max-w-3xl text-xl md:text-3xl lg:text-2xl text-white font-semibold"
        >
          Discover the Wonders of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-cyan-600 via-cyan-400 to-cyan-200">
            Universe
          </span>
          , Engage with Fellow{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400 font-bold">
            Space Enthusiasts
          </span>
          , and Stay Updated on the Latest Celestial Adventures.
        </motion.h2>
      </div>
    </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <Hero />
      {/* Add more components or content for your dashboard here */}
    </div>
  );
};

export default Dashboard;
