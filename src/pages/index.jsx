import React from "react";

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <div className="container-fluid jumbo">

        <div className="text-center jumbo-img"> 

          <div className="flex flex-row justify-center mask">

            <div className="flex flex-row justify-center">
              <Link to="/select" className="secondary block rounded-xl lg:w-100 w-60 my-auto px-5 py-20 text-4xl text-center getStarted"><b>GET STARTED</b></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="gold">
        .
      </div>

      <div className="index-text"> 
        <p className="lg:text-8xl text-4xl pt-10 lg:text-start text-center"><b>PLAN YOUR DEGREE</b></p>
        <p className="lg:text-7xl text-3xl lg:text-end text-center"><b>FIND YOUR PATH</b></p>
        <p className="lg:text-xl text-base py-10">
          PsychRoadMap is a tool for students of psychology at Lindenwood University, made to cater specifically to your learning experience. <br/> 
          Use PsychRoadMap to stop, take a look at where you are, and help decide where you want to go. <br/>
          To begin, click the "GET STARTED" button above.</p>
      </div>
    </main>
  );
};

export default Index;