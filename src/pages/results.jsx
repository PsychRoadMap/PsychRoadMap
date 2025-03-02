import React from "react";

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

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

      <div className="results flex justify-center">

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

      <div className="my-5 button">
        <div class="flex justify-center align-items-center mt-10">
          <Link reloadDocument to="/select" class="gold rounded-xl lg:my-auto lg:w-150 w-60 my-20 px-5 py-20 text-4xl text-center"><b>TRY A DIFFERENT PATH</b></Link>
        </div>
      </div>

      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </main >
  );
};

export default Select;