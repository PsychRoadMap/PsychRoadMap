import React from "react";

import { Link } from "react-router-dom";

function Select() {

  return (
    <main>

      <div className="container-fluid jumbito">

        <div className="text-center about jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
              How it works!
            </p>
          </div>
        </div>
      </div>

      <div className="gold">
        .
      </div>

      <div className="select-text flex justify-center">
        <div className="waiting my-5">
          <p> There's no written content for this page yet!</p>
          <p> This is the page where we will explain how the app works. </p>
          <p> Except, right now we're still building it! </p>
          <p> Stay tuned for the actual content!</p>
        </div>
      </div>

    </main >
  );
};

export default Select;