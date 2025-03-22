import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import logo from '../assets/prm.svg'


function Header() {

  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">

          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-32 logo" alt="PsychRoadMap Logo" />
            <div className="logo-text">
              <p className="self-center lg:text-4xl text-2xl font-semibold whitespace-nowrap">
                PsychRoadMap <br />
                <span className="lg:text-2xl text-base italic text-wrap">Mapping skills to career psych-cess!</span>
              </p>
            </div>
          </Link>

        </div>
      </nav>

    </header>

  );
};

export default Header;