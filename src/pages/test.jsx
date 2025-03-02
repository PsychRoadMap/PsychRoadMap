import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Flowbite } from "flowbite-react";


import { Accordion, AccordionContent, AccordionPanel } from "flowbite-react";

import React from "react";

import { Link } from "react-router-dom";

const Select = () => {


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

      {/* SELECTION SECTION */}
      <div class="select-text">
        <p class="lg:text-6xl text-3xl py-10"><b>Select your courses to get started!</b></p>
        <p class="text-base">
          Select all of the Psychology courses you have taken or plan to take as you work towards your degree.
          We recommend meeting or exceeding the credit hour requirements per course grouping for the best results.
        </p>
        <p class="text-base pt-5">
          Courses are sectioned by the type of coursework taught, as categorized by Lindenwood University.
          Each section requires a certain amount of credit hours in order to graduate with a given degree,
          but students are welcome to choose as few or as many courses as they'd like for the purposes of this application.
        </p>
        <p class="text-base pt-5">
          Once you have finished selecting your courses,
          press the "Generate Results" button at the bottom of the page to see what career paths PsychRoadMap suggests for you!
        </p>

        {/* I am currently testing the accordion component. Right now, I am unable to update the theme on it. 
        Applying my own CSS classes to alter the look is not feasible because the element updates with new classes on click.
        If anyone can figure out how to do this, I would be very appreciative. I will keep testing nevertheless. */}

        {/* MAIN ACCORDION */}
        <Accordion flush>
          <Accordion.Panel>
            {/* STATISTICS COURSEWORK */}
            <Accordion.Title>
                <p><b>Statistics Coursework</b></p>
            </Accordion.Title>
            <Accordion.Content>
              <p class="text-base"> 3 credit hours of coursework from the following options:</p>

              <Accordion flush>

                <Accordion.Panel>
                  <Accordion.Title>
                    <label for="MTH14100">
                      <input type="checkbox" id="MTH14100" name="MTH14100" value="MTH14100" />
                      MTH 14100 - Basic Statistics (3 hrs)
                    </label>
                  </Accordion.Title>
                  <AccordionContent>
                    <p class="desc">
                      This course is an introduction to the theory and applications of statistics, including probability, descriptive statistics, random variables, expected values, distribution functions, and hypothesis testing.
                    </p>
                  </AccordionContent>
                </Accordion.Panel>

                <AccordionPanel>
                  <Accordion.Title>
                    <label for="MTH24100">
                      <input type="checkbox" id="MTH24100" name="MTH24100" value="MTH24100" />
                      MTH 24100 - Statistics for Natural Science (3 hrs)
                    </label>
                  </Accordion.Title>
                  <AccordionContent>
                    <p class="desc">
                      This course explores the logic and methods of behavioral research. Students complete group research projects designed to reinforce pivotal concepts. Must be taken concurrently with PSY 30600.
                    </p>
                  </AccordionContent>
                </AccordionPanel>

              </Accordion>

            </Accordion.Content>
          </Accordion.Panel>
        </Accordion >

        <div class="flex justify-center align-items-center mt-10">
          <Link to="/results" class="gold rounded-xl lg:my-auto lg:w-100 w-60 my-20 px-5 py-20 text-4xl text-center">GET RESULTS</Link>
        </div>

      </div >
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main >
  );
};

export default Select;