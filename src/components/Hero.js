import React from "react";
import Form from "./Form";

const Hero = () => {
    return (
        <div className="App">
          <div className="h-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 content-center hero-background ">
            <div className="pl-5 lg:ms-20">
              <h1 className="text-white text-3xl md:text-6xl lg:text-6xl text-left font-bold ">Master the Game: Dive Deep into the World of Chess Excellence</h1>
              <p  className="text-white text-1xl md:text-2xl lg:text-2xl me-2 mt-5 text-left ">Unlock Your Potential with Expert Guidance and Strategies for Success</p>
            </div>
            <div className="">
                <Form />
            </div>
          </div>
        </div>
      );
}
export default Hero;