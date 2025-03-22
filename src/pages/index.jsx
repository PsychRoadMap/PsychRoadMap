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
        <p className="period">.</p>
      </div>

      <div className="index-text">
        <p className="lg:text-8xl text-4xl pt-10 lg:text-start text-center"><b>PLAN YOUR CAREER</b></p>
        <p className="lg:text-7xl text-3xl lg:text-end text-center"><b>FIND YOUR PATH</b></p>
        <p className="lg:text-xl text-base py-10">
          PsychRoadmap is tool to help you, the student, connect knowledge and skills that you have developed in your courses (or will develop in future courses) to potential employment opportunities. <br/>
          Our hope it that this information will help you identify new potential career paths and guide your upcoming course selections. <br/>
          While you are welcome to explore this on your own, it is also a great advising tool.<br/>
          Bring your results to your next advising meeting to discuss your future plans with your advisor.<br/>
          Use PsychRoadMap to stop, take a look at where you are, and help decide where you want to go.
        </p>
      </div>
    </main>
  );
};

export default Index;