import React from "react";

import { Link } from "react-router-dom";

function Select() {

  return (
    <main>

      <div class="container-fluid jumbito">

        <div class="text-center jumbito-img">
          <div class="flex flex-row justify-content-center align-items-center">
            <p class="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
              Find your potential!
            </p>
          </div>
        </div>
      </div>

      <div class="gold">
        .
      </div>

      <div className="results flex flex-wrap justify-center">

        <div className="card m-5">
          <div className="card-title text-center">
            <p>BACHELOR'S DEGREE</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
        </div>

        <div className="card m-5">
          <div className="card-title text-center">
            <p>BACHELOR'S + EXPERIENCE</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
        </div>

        <div className="card m-5">
          <div className="card-title text-center">
            <p>HIGHER EDUCATION</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
          <div className="card-job ">
            <p>This is a job</p>
          </div>
        </div>
      </div>

      <div className="my-5 button pb-10">
        <div class="flex justify-center align-items-center mt-10">
          <Link to="/select" class="secondary rounded-xl lg:my-auto lg:w-150 w-60 my-5 px-5 py-20 text-4xl text-center"><b>TRY A DIFFERENT PATH</b></Link>
        </div>
        <div class="flex justify-center align-items-center lg:mt-10 flex-wrap">
          <Link to="/results" class="secondary rounded-xl lg:my-auto lg:w-70 w-60 my-5 px-5 py-10 text-4xl text-center lg:mr-5"><b>EXPORT</b></Link>
          <a href="https://www.lindenwood.edu/science/social-and-behavioral-sciences/psychology-bs/" class="secondary rounded-xl lg:my-auto lg:w-70 w-60 my-5 px-5 py-10 text-4xl text-center lg:ml-5"><b>CONTACT</b></a>
        </div>
      </div>

      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </main >
  );
};

export default Select;