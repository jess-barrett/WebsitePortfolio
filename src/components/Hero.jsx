import React from "react";
import Me from "../assets/images/Me.jpeg";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8">
        <img className="hero-height col-span-full row-span-full" src={Me} />
        <div className="col-start-6 col-span-3 row-start-3 row-span-4">
          <h1 className="text-6xl bungee text-cyan-700">Hello,</h1>
          <div className="text-4xl bungee flex items-end mt-4">
            <h3 className="text-cyan-700 mr-3">I am</h3>
            <h1 className="text-6xl font-bold text-cyan-800">Jess Barrett</h1>
          </div>
          <p className="bg-cyan-600 text-justify varta rounded-l-lg px-6 py-4 text-white text-xl mt-8">
            I am a Web Developer and Software Engineer from Overland Park, Kansas.
            Currently, I am a Computer Science student at Kansas State University.
            My expertise lies in building both Front-End applications and Back-End
            softwares.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
