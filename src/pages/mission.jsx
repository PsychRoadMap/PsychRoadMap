import React from "react";

import img from '../assets/psychology-ba-zoom.png'


function Select() {

  return (
    <main>

      <div className="container-fluid jumbito">

        <div className="text-center mission jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
              Learn our mission!
            </p>
          </div>
        </div>
      </div>

      <div className="gold">
        .
      </div>

      <div className="select-text flex justify-center flex-wrap">
        <div className="my-5 mx-2 mission-text">
          <p className="lg:text-6xl text-3xl py-10"> Our Mission </p>
          <p>PsychRoadmap is a tool to help you, the student, connect knowledge and skills that you have developed in your courses (or will develop in future courses) to potential employment opportunities.</p>
          <p>Our hope it that this information will help you identify new potential career paths and guide your upcoming course selections.</p>
          <p>While you are welcome to explore this on your own, it is also a great advising tool.</p>
          <p>Bring your results to your next advising meeting to discuss your future plans with your advisor.</p>
          <div className="my-5 button py-10">
            <a href="https://www.lindenwood.edu/science/social-and-behavioral-sciences/psychology-bs/" class="secondary rounded-xl lg:my-auto lg:w-70 w-60 my-5 px-5 py-5 text-4xl text-center"><b>CONTACT</b></a>
          </div>
        </div>
        <div className="mission-img py-20" >
          <img src={img} />
        </div>
      </div>

    </main >
  );
};

export default Select;