import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import logo from '../assets/prm.png'


function Header() {

  useEffect(() => {
    const hamburgerButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-32 logo" alt="PsychRoadMap Logo" />
            <div className="logo-text">
              <p className="self-center lg:text-4xl text-2xl font-semibold whitespace-nowrap">
                PsychRoadMap <br />
                <span className="lg:text-2xl text-base italic text-wrap">Mapping skills to career psych-cess!</span>
              </p>
            </div>
          </Link>

          <div className="flex items-center lg:order-2">
            <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/select" className="block lg:w-50 lg:px-5 lg:py-5 text-2xl gold border-b text-center mb-0.5 headerbutton"><b>APP</b></Link>
              </li>
              <li>
                <Link to="/mission" className="block lg:w-50 lg:px-5 lg:py-5 text-2xl gold border-b text-center mb-0.5 headerbutton"><b>MISSION</b></Link>
              </li>
              <li>
                <Link to="/about" className="block lg:w-50 lg:px-5 lg:py-5 text-2xl gold border-b text-center headerbutton"><b>ABOUT</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>

  );
};

export default Header;