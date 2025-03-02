import React from "react";

import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <div class="container-fluid jumbo">

        <div class="text-center jumbo-img"> 

          <div class="flex flex-row justify-content-center align-items-center mask">

            <div class="flex flex-row justify-center align-items-center">
              <Link to="/select" class="secondary block rounded-xl lg:my-auto lg:w-100 w-60 my-20 lg:ml-20 px-5 py-20 text-gray-700 text-4xl bg-white hover:bg-gray-200 border-b border-gray-100 lg:border-0 text-center getStarted"><b>GET STARTED</b></Link>
            </div>
          </div>
        </div>
      </div>

      <div class="gold">
        .
      </div>

      <div class="index-text"> 
        <p class="lg:text-8xl text-4xl pt-10 lg:text-start text-center"><b>PLAN YOUR DEGREE</b></p>
        <p class="lg:text-7xl text-3xl lg:text-end text-center"><b>FIND YOUR PATH</b></p>
        <p class="lg:text-xl text-base py-10">
          PsychRoadMap is a tool for students of psychology at Lindenwood University, made to cater specifically to your learning experience. <br/> 
          Use PsychRoadMap to stop, take a look at where you are, and help decide where you want to go. <br/>
          To begin, click the "GET STARTED" button above.</p>
      </div>
    </main>
  );
};

export default Index;