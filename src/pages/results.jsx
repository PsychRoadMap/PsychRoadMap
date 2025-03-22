import React from "react";

import html2pdf from "html2pdf.js";

import { Link } from "react-router-dom";

function Select() {

  return (
    <main>

      <div className="container-fluid jumbito">

        <div className="text-center jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="lg:w-500 text-white lg:text-8xl md:text-6xl text-4xl lg:text-start text-center w-400 jumbito-text">
              Find your potential!
            </p>
          </div>
        </div>
      </div>

      <div className="gold">
        <p className="period">.</p>
      </div>

      <div className="results flex flex-wrap justify-center">

        <div className="card m-5">
          <div className="card-title text-center">
            <p>BACHELOR'S DEGREE</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
        </div>

        <div className="card m-5">
          <div className="card-title text-center">
            <p>BACHELOR'S + EXPERIENCE</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
        </div>

        <div className="card m-5">
          <div className="card-title text-center">
            <p>HIGHER EDUCATION</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
          <div className="card-job ">
            <p>This is a potential career</p>
          </div>
        </div>
      </div>

      <div className="my-5 button pb-10">
        <div className="flex justify-center align-items-center mt-10">
          <Link to="/select" className="secondary rounded-xl lg:my-auto lg:w-150 w-60 my-5 px-5 py-20 text-4xl text-center"><b>TRY A DIFFERENT PATH</b></Link>
        </div>
        <div className="flex justify-center align-items-center lg:mt-10 flex-wrap lg:gap-8 gap-2">
          <a className="secondary rounded-xl lg:my-auto lg:w-70 w-60 my-5 px-5 py-10 text-4xl text-center" onClick={() => { html2pdf().from(document.getElementById('body')).toContainer().save('PsychRoadMap.pdf'); }}><b>EXPORT</b></a>
          <a href="https://www.lindenwood.edu/science/social-and-behavioral-sciences/psychology-bs/" className="secondary rounded-xl lg:my-auto lg:w-70 w-60 my-5 px-5 py-10 text-4xl text-center"><b>CONTACT</b></a>
        </div>
      </div>

      <script src="../../node_modules/html2pdf.js/dist/html2pdf.min.js"></script>

    </main >
  );
};

export default Select;