import React from "react";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Select = () => {

  useEffect(() => {
    const timeoutId = setTimeout(() => {

    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

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

          {/* MAIN ACCORDION */}
          <div id="accordion-nested-parent" data-accordion="open">

            {/* MAJOR COURSEWORK */}
            <div id="accordion-open-heading-1">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>Major Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-1" class="hidden" aria-labelledby="accordion-open-heading-1">
              <p class="text-base"> 12 credit hours of coursework from the following options:</p>


              <div id="accordion-flush-1" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-1-1" class="flex justify-between w-full gap-3">
                    <label for="PSY10000">
                      <input type="checkbox" id="PSY10000" name="PSY10000" value="PSY10000" />
                      PSY 10000 - Principles of Psychology  (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-1-1" aria-expanded="false" aria-controls="accordion-flush-body-1-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1-1" class="hidden" aria-labelledby="accordion-flush-heading-1-1">
                    <p class="desc">
                      This course is an exploration of basic psychological concepts, methods, and findings contributing to an understanding of human behavior.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-1-2" class="flex justify-between w-full gap-3">
                    <label for="PSY30400">
                      <input type="checkbox" id="PSY30400" name="PSY30400" value="PSY30400" />
                      PSY 30400 - Basic Research Methods  (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-1-2" aria-expanded="false" aria-controls="accordion-flush-body-1-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1-2" class="hidden" aria-labelledby="accordion-flush-heading-1-2">
                    <p class="desc">
                      This course explores the logic and methods of behavioral research. Students complete group research projects designed to reinforce pivotal concepts. Must be taken concurrently with PSY 30600.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-1-3" class="flex justify-between w-full gap-3">
                    <label for="PSY30600">
                      <input type="checkbox" id="PSY30600" name="PSY30600" value="PSY30600" />
                      PSY 30600 - Behavioral Science Statistics (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-1-3" aria-expanded="false" aria-controls="accordion-flush-body-1-3">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1-3" class="hidden" aria-labelledby="accordion-flush-heading-1-3">
                    <p class="desc">
                      This course emphasizes the application of descriptive and inferential statistics in behavioral science research. Must be taken concurrently with PSY 30400.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-1-4" class="flex justify-between w-full gap-3">
                    <label for="PSY48500">
                      <input type="checkbox" id="PSY48500" name="PSY48500" value="PSY48500" />
                      PSY 48500 - Senior Seminar (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-1-4" aria-expanded="false" aria-controls="accordion-flush-body-1-4">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-1-4" class="hidden" aria-labelledby="accordion-flush-heading-1-4">
                    <p class="desc">
                      This course is a survey of the history of psychology and recent developments in various fields within the discipline. Learning from previous coursework is consolidated and integrated. Relationships between personal characteristics and career choices are explored. Professional issues and ethics are examined.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* STATISTICS COURSEWORK */}
            <div id="accordion-open-heading-2">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-2" aria-expanded="true" aria-controls="accordion-open-body-2">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>Statistics Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-2" class="hidden" aria-labelledby="accordion-open-heading-2">
              <p class="text-base"> 3 credit hours of coursework from the following options:</p>


              <div id="accordion-flush-3" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-2-1" class="flex justify-between w-full gap-3">
                    <label for="MTH14100">
                      <input type="checkbox" id="MTH14100" name="MTH14100" value="MTH14100" />
                      MTH 14100 - Basic Statistics (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-2-1" aria-expanded="false" aria-controls="accordion-flush-body-2-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-2-1" class="hidden" aria-labelledby="accordion-flush-heading-2-1">
                    <p class="desc">
                      This course is an introduction to the theory and applications of statistics, including probability, descriptive statistics, random variables, expected values, distribution functions, and hypothesis testing.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-2-2" class="flex justify-between w-full gap-3">
                    <label for="MTH24100">
                      <input type="checkbox" id="MTH24100" name="MTH24100" value="MTH24100" />
                      MTH 24100 - Statistics for Natural Science (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-2-2" aria-expanded="false" aria-controls="accordion-flush-body-2-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-2-2" class="hidden" aria-labelledby="accordion-flush-heading-2-2">
                    <p class="desc">
                      This course explores the logic and methods of behavioral research. Students complete group research projects designed to reinforce pivotal concepts. Must be taken concurrently with PSY 30600.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* CLINICAL PSYCHOLOGY COURSEWORK */}
            <div id="accordion-open-heading-3">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-3" aria-expanded="true" aria-controls="accordion-open-body-3">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>Clinical Psychology Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-3" class="hidden" aria-labelledby="accordion-open-heading-3">
              <p class="text-base"> 6 credit hours of coursework from the following options:</p>

              <div id="accordion-flush-3" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-3-1" class="flex justify-between w-full gap-3">
                    <label for="PSY30300">
                      <input type="checkbox" id="PSY30300" name="PSY30300" value="PSY30300" />
                      PSY 30300 - Abnormal Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-1" aria-expanded="false" aria-controls="accordion-flush-body-3-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-1" class="hidden" aria-labelledby="accordion-flush-heading-3-1">
                    <p class="desc">
                      This course is a survey of the major classes of mental disorders. Emphasis is on understanding symptoms, the complex interaction of factors related to mental disorders, and controversies in the field.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-3-2" class="flex justify-between w-full gap-3">
                    <label for="PSY30900">
                      <input type="checkbox" id="PSY30900" name="PSY30900" value="PSY30900" />
                      PSY 30900 - Personality (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-2" aria-expanded="false" aria-controls="accordion-flush-body-3-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-2" class="hidden" aria-labelledby="accordion-flush-heading-3-2">
                    <p class="desc">
                      Explores core concepts in the field of personality, with emphasis on how those concepts are integrated into personality theories and how they are evaluated scientifically. Students apply these concepts in independent projects.                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-3-3" class="flex justify-between w-full gap-3">
                    <label for="PSY31100">
                      <input type="checkbox" id="PSY31100" name="PSY31100" value="PSY31100" />
                      PSY 31100 - Behavior Modification (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-3" aria-expanded="false" aria-controls="accordion-flush-body-3-3">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-3" class="hidden" aria-labelledby="accordion-flush-heading-3-3">
                    <p class="desc">
                      An exploration of environmental influences on human behavior, with an emphasis on behavior modification procedures and behavior management.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-3-4" class="flex justify-between w-full gap-3">
                    <label for="PSY32100">
                      <input type="checkbox" id="PSY32100" name="PSY32100" value="PSY32100" />
                      PSY 32100 - Health Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-4" aria-expanded="false" aria-controls="accordion-flush-body-3-4">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-4" class="hidden" aria-labelledby="accordion-flush-heading-3-4">
                    <p class="desc">
                      An investigation of the psychological influences on health, illness, and the physical, behavioral, and cognitive adaptation to illness. The mind-body relationship is examined through topics including exercise, stress, weight control, pain management, meditation, coping styles, psycho-immunology, and behavioral habits.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-3-5" class="flex justify-between w-full gap-3">
                    <label for="PSY32400">
                      <input type="checkbox" id="PSY32400" name="PSY32400" value="PSY32400" />
                      PSY 32400 - Psychological Testing (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-5" aria-expanded="false" aria-controls="accordion-flush-body-3-5">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-5" class="hidden" aria-labelledby="accordion-flush-heading-3-5">
                    <p class="desc">
                      Examines mental measurement theory and the principles of reliability, validity, and standardization as related to the construction and interpretation of tests. Tests of achievement, aptitude, intelligence, interest, and personality are studied as illustrations of the problems of measurement and the variety of solutions to those problems. Ethics of test use receives special consideration.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-3-6" class="flex justify-between w-full gap-3">
                    <label for="PSY34100">
                      <input type="checkbox" id="PSY34100" name="PSY34100" value="PSY34100" />
                      PSY 34100 - Psychotherapy (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-6" aria-expanded="false" aria-controls="accordion-flush-body-3-6">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-6" class="hidden" aria-labelledby="accordion-flush-heading-3-6">
                    <p class="desc">
                      An introduction to the theories, principles, and techniques of various current approaches to psychotherapy.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-3-7" class="flex justify-between w-full gap-3">
                    <label for="PSY35100">
                      <input type="checkbox" id="PSY35100" name="PSY35100" value="PSY35100" />
                      PSY 35100 - Understanding Depression (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-3-7" aria-expanded="false" aria-controls="accordion-flush-body-3-7">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-3-7" class="hidden" aria-labelledby="accordion-flush-heading-3-7">
                    <p class="desc">
                      This seminar-style course involves an exploration of several ways of thinking about, talking about, and understanding the experience generally labeled as “depression,” all with an eye toward gaining a greater appreciation of what its inner experience is like. Some of the perspectives we’ll explore are the psychodynamic, cognitive, humanistic-existential, neurobiological, evolutionary, cultural, gendered, and literary perspectives on the first-hand experience of depression. A range of intervention approaches will also be explored. This course will entail substantial reading, writing, and discussion, and is intended for upper level students with a strong interest in the topic.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* EXPERIMENTAL PSYCHOLOGY COURSEWORK */}
            <div id="accordion-open-heading-4">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-4" aria-expanded="true" aria-controls="accordion-open-body-4">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>Experimental Psychology Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-4" class="hidden" aria-labelledby="accordion-open-heading-4">
              <p class="text-base"> 6 credit hours of coursework from the following options:</p>

              <div id="accordion-flush-4" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-4-1" class="flex justify-between w-full gap-3">
                    <label for="PSY31500">
                      <input type="checkbox" id="PSY31500" name="PSY31500" value="PSY31500" />
                      PSY 31500 - Psychology of Prejudice (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-1" aria-expanded="false" aria-controls="accordion-flush-body-4-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-1" class="hidden" aria-labelledby="accordion-flush-heading-4-1">
                    <p class="desc">
                      This course, broadly defined, will discuss group perceptions and interactions from a social psychological perspective and specifically on stereotyping, prejudice, and discrimination. In this course, we will examine the roots and causes of such biases, the consequences and implications, as well as prejudice reduction efforts. These biases apply broadly to all lived experiences (e.g., race, ethnicity, gender, sexuality, ability, religion, etc.).
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-4-2" class="flex justify-between w-full gap-3">
                    <label for="PSY32500">
                      <input type="checkbox" id="PSY32500" name="PSY32500" value="PSY32500" />
                      PSY 32500 - Behavioral Neuroscience (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-2" aria-expanded="false" aria-controls="accordion-flush-body-4-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-2" class="hidden" aria-labelledby="accordion-flush-heading-4-2">
                    <p class="desc">
                      This course examines the central nervous system, the development and function of nerve cells, and brain-behavior relationships. Topics include motivation, learning, sensation and perception, movement, emotions, and brain dysfunction.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-4-3" class="flex justify-between w-full gap-3">
                    <label for="PSY32600">
                      <input type="checkbox" id="PSY32600" name="PSY32600" value="PSY32600" />
                      PSY 32600 - Sensation and Perception (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-3" aria-expanded="false" aria-controls="accordion-flush-body-4-3">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-3" class="hidden" aria-labelledby="accordion-flush-heading-4-3">
                    <p class="desc">
                      This course covers the biology of the brain and sensory systems, both of which allow perceptual processing to occur. Our reality is based upon receiving sensory input and giving meaning to that input by translating incoming information into a focused perception of our environment. Each of us has our own personal reality. We will discuss the mechanisms behind our perceptual experiences, as well as the philosophical questions associated with both “normal” and “abnormal” functioning. This class primarily focuses on visual and auditory processing; however, we will also briefly explore other sensory systems and perceptual phenomena.                  </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-4-4" class="flex justify-between w-full gap-3">
                    <label for="PSY33000">
                      <input type="checkbox" id="PSY33000" name="PSY33000" value="PSY33000" />
                      PSY 33000 - Learning and Memory (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-4" aria-expanded="false" aria-controls="accordion-flush-body-4-4">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-4" class="hidden" aria-labelledby="accordion-flush-heading-4-4">
                    <p class="desc">
                      This course investigates factors involved in acquiring and changing behaviors. Theories, models, and empirical findings in the field or learning and memory are explored.                  </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-4-5" class="flex justify-between w-full gap-3">
                    <label for="PSY33100">
                      <input type="checkbox" id="PSY33100" name="PSY33100" value="PSY33100" />
                      PSY 33100 - Cognitive Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-5" aria-expanded="false" aria-controls="accordion-flush-body-4-5">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-5" class="hidden" aria-labelledby="accordion-flush-heading-4-5">
                    <p class="desc">
                      This course examines mental processes related to perception, attention, problem-solving, thinking, and decision making. Theories, concepts, and experimental methods in cognitive research are explored.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-4-6" class="flex justify-between w-full gap-3">
                    <label for="PSY33200">
                      <input type="checkbox" id="PSY33200" name="PSY33200" value="PSY33200" />
                      PSY 33200 - Psychology of Motivation and Emotion (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-6" aria-expanded="false" aria-controls="accordion-flush-body-4-6">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-6" class="hidden" aria-labelledby="accordion-flush-heading-4-6">
                    <p class="desc">
                      An analysis of the major theories of motivation, the data on which they are based, and applications of motivation concepts.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-4-7" class="flex justify-between w-full gap-3">
                    <label for="PSY33400">
                      <input type="checkbox" id="PSY33400" name="PSY33400" value="PSY33400" />
                      PSY 33400 - Social Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-4-7" aria-expanded="false" aria-controls="accordion-flush-body-4-7">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-4-7" class="hidden" aria-labelledby="accordion-flush-heading-4-7">
                    <p class="desc">
                      This course examines the effect of the social situation on the individual. Topics include: self-perception, social cognition, social influence, attraction and relationships, attitude formation and persuasion, prejudice, and group behavior.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* DEVELOPMENTAL PSYCHOLOGY COURSEWORK */}
            <div id="accordion-open-heading-5">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-5" aria-expanded="true" aria-controls="accordion-open-body-5">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>Developmental Psychology Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-5" class="hidden" aria-labelledby="accordion-open-heading-5">
              <p class="text-base"> 6 credit hours of coursework from the following options:</p>

              <div id="accordion-flush-5" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-5-1" class="flex justify-between w-full gap-3">
                    <label for="PSY20500">
                      <input type="checkbox" id="PSY20500" name="PSY20500" value="PSY20500" />
                      PSY 20500 - Human Development (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-1" aria-expanded="false" aria-controls="accordion-flush-body-5-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-1" class="hidden" aria-labelledby="accordion-flush-heading-5-1">
                    <p class="desc">
                      An overview of human development from conception through death. This course provides an introduction to the study of lifespan development focusing on physical, cognitive, and social development.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-5-2" class="flex justify-between w-full gap-3">
                    <label for="PSY20800">
                      <input type="checkbox" id="PSY20800" name="PSY20800" value="PSY20800" />
                      PSY 20800 - Child Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-2" aria-expanded="false" aria-controls="accordion-flush-body-5-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-2" class="hidden" aria-labelledby="accordion-flush-heading-5-2">
                    <p class="desc">
                      An introduction to factors influencing children’s social, emotional, motor, cognitive, and language development from conception to late childhood.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-5-3" class="flex justify-between w-full gap-3">
                    <label for="PSY21000">
                      <input type="checkbox" id="PSY21000" name="PSY21000" value="PSY21000" />
                      PSY 21000 - Psychology of Parenting (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-3" aria-expanded="false" aria-controls="accordion-flush-body-5-3">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-3" class="hidden" aria-labelledby="accordion-flush-heading-5-3">
                    <p class="desc">
                      Theories and research related to parenting are discussed, with a focus on their practical application. Topics include cultural influences on parenting, social expectations of parents, discipline, fostering healthy lifestyles for children, and parenting in special circumstances including divorce, work, foster families, and gay and lesbian parents.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-5-4" class="flex justify-between w-full gap-3">
                    <label for="PSY31200">
                      <input type="checkbox" id="PSY31200" name="PSY31200" value="PSY31200" />
                      PSY 31200 - Psychology of Aging (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-4" aria-expanded="false" aria-controls="accordion-flush-body-5-4">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-4" class="hidden" aria-labelledby="accordion-flush-heading-5-4">
                    <p class="desc">
                      Examines psychological development in later adulthood, emphasizing the internal and external influences on aging and the dynamics of continuity and change. Emotional, cognitive, and social functioning are addressed.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-5-5" class="flex justify-between w-full gap-3">
                    <label for="PSY31300">
                      <input type="checkbox" id="PSY31300" name="PSY31300" value="PSY31300" />
                      PSY 31300 - Psychology of Adolescence (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-5" aria-expanded="false" aria-controls="accordion-flush-body-5-5">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-5" class="hidden" aria-labelledby="accordion-flush-heading-5-5">
                    <p class="desc">
                      A cultural approach to physical, intellectual, emotional, and social development during adolescence. Historical context and research are given special attention in studying the development of personal identity, changing roles in the family, school, and community, and problems of adjustment, delinquency, and drug abuse.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-5-6" class="flex justify-between w-full gap-3">
                    <label for="PSY36500">
                      <input type="checkbox" id="PSY36500" name="PSY36500" value="PSY36500" />
                      PSY 36500 - Human Sexuality (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-5-6" aria-expanded="false" aria-controls="accordion-flush-body-5-6">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-5-6" class="hidden" aria-labelledby="accordion-flush-heading-5-6">
                    <p class="desc">
                      This course is a survey of theories and research on psychological aspects of human sexual behavior. Topics include male and female sexual development, psychological and cross-cultural perspectives on sexual behavior, sexual behavior in special populations, aberrant sexual patterns, and current sexual trends in America.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* GENERAL PSYCHOLOGY COURSEWORK */}
            <div id="accordion-open-heading-6">
              <button type="button" class="text-start bg-white" data-accordion-target="#accordion-open-body-6" aria-expanded="true" aria-controls="accordion-open-body-6">
                <p class="gold my-5 py-2 text-3xl flex justify-between"><b>General Psychology Coursework</b>
                  <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </p>
              </button>
            </div>
            <div id="accordion-open-body-6" class="hidden" aria-labelledby="accordion-open-heading-6">
              <p class="text-base"> 6 credit hours of coursework from the following options:</p>

              <div id="accordion-flush-6" data-accordion="open" data-active-classes="bg-white" data-inactive-classes="text-gray-500 dark:text-gray-400">

                <div class="section">
                  <h2 id="accordion-flush-heading-6-1" class="flex justify-between w-full gap-3">
                    <label for="PSY15700">
                      <input type="checkbox" id="PSY15700" name="PSY15700" value="PSY15700" />
                      PSY 15700 - Psychology of Leadership (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-1" aria-expanded="false" aria-controls="accordion-flush-body-6-1">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-1" class="hidden" aria-labelledby="accordion-flush-heading-6-1">
                    <p class="desc">
                      Students will learn about leadership theory, motivational theory, and emotional intelligence from a psychological perspective. The course will explore the knowledge base and skills necessary to be an effective leader in a variety of settings. Students will think critically about their own leadership abilities and examine their leadership skills and potential as they participate in self-assessments and leadership exercises.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-2" class="flex justify-between w-full gap-3">
                    <label for="PSY18100">
                      <input type="checkbox" id="PSY18100" name="PSY18100" value="PSY18100" />
                      PSY 18100 - Cultural Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-2" aria-expanded="false" aria-controls="accordion-flush-body-6-2">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-2" class="hidden" aria-labelledby="accordion-flush-heading-6-2">
                    <p class="desc">
                      This course introduces general theories and methods related to culture and diversity. Students learn about the role of culture in human development, examine social relationships, and explore how culture molds cognitive processes, perception, and morality. Students explore the bridge between cultural psychology and identity enabling them to evaluate key concepts including gain a better understanding about group identity formation, stereotyping, prejudice, stigma, and multiculturalism through a cross-cultural framework. Students utilize research methods and analytical techniques of culture psychology to critically examining the topics covered in the course.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-3" class="flex justify-between w-full gap-3">
                    <label for="PSY21200">
                      <input type="checkbox" id="PSY21200" name="PSY21200" value="PSY21200" />
                      PSY 21200 - Japanese Culture, Society, and Mind (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-3" aria-expanded="false" aria-controls="accordion-flush-body-6-3">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-3" class="hidden" aria-labelledby="accordion-flush-heading-6-3">
                    <p class="desc">
                      This course is offered as a GE-HC:ForCul/HD course and delves into a variety of different aspects of Japanese culture, society, and mind from the traditional to the more modern. Some topic areas include customs, language, pop culture, holidays, etiquette, culture-envy, and philosophy. Emphasis is placed on anthropological, sociological, and psychological aspects of Japan and its people.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-4" class="flex justify-between w-full gap-3">
                    <label for="PSY21500">
                      <input type="checkbox" id="PSY21500" name="PSY21500" value="PSY21500" />
                      PSY 21500 - Careers in Psychology (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-4" aria-expanded="false" aria-controls="accordion-flush-body-6-4">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-4" class="hidden" aria-labelledby="accordion-flush-heading-6-4">
                    <p class="desc">
                      This course orients students to the discipline of psychology. Topics include the role of research in the field, and the range of specialty fields within the discipline. Provides guidance in the use of APA style and library databases, and explores careers related to the major.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-5" class="flex justify-between w-full gap-3">
                    <label for="PSY23500">
                      <input type="checkbox" id="PSY23500" name="PSY23500" value="PSY23500" />
                      PSY 23500 - Death, Dying, Life, & Living (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-5" aria-expanded="false" aria-controls="accordion-flush-body-6-5">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-5" class="hidden" aria-labelledby="accordion-flush-heading-6-5">
                    <p class="desc">
                      This course encourages students to consider and plan for the psychological, medical, ethical, legal, cultural, and financial aspects of death, as well as the role of death awareness in cultivating meaning and joy in life.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-6" class="flex justify-between w-full gap-3">
                    <label for="PSY30800">
                      <input type="checkbox" id="PSY30800" name="PSY30800" value="PSY30800" />
                      PSY 30800 - Psychology of Women & Gender (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-6" aria-expanded="false" aria-controls="accordion-flush-body-6-6">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-6" class="hidden" aria-labelledby="accordion-flush-heading-6-6">
                    <p class="desc">
                      Explores the historical, biological, psychological, sociological, and multicultural factors that shape women’s lives and influence gender development and identity throughout the lifespan. Emphasis includes psychological research and theoretical frameworks that possibly explain gender similarities and differences. Also examines how gender impacts body image, victimization, physical and mental health, pregnancy and parenthood, achievement, and work experiences.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-7" class="flex justify-between w-full gap-3">
                    <label for="PSY39012">
                      <input type="checkbox" id="PSY39012" name="PSY39012" value="PSY39012" />
                      PSY 39012 - Special Topics: Memory in the Media (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-7" aria-expanded="false" aria-controls="accordion-flush-body-6-7">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-7" class="hidden" aria-labelledby="accordion-flush-heading-6-7">
                    <p class="desc">
                      no description provided.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-8" class="flex justify-between w-full gap-3">
                    <label for="PSY40440">
                      <input type="checkbox" id="PSY40440" name="PSY40440" value="PSY40440" />
                      PSY 40440 - Advanced Research Methods & Statistics (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-8" aria-expanded="false" aria-controls="accordion-flush-body-6-8">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-8" class="hidden" aria-labelledby="accordion-flush-heading-6-8">
                    <p class="desc">
                      This is an advanced course in research design and analysis. Students design and conduct original behavioral research, analyze their data, and present their findings to others. Strongly recommended for students planning to pursue graduate study in the social or behavioral sciences.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-9" class="flex justify-between w-full gap-3">
                    <label for="PSY45000">
                      <input type="checkbox" id="PSY45000" name="PSY45000" value="PSY45000" />
                      PSY 45000 - Psychology Practicum (3 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-9" aria-expanded="false" aria-controls="accordion-flush-body-6-9">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-9" class="hidden" aria-labelledby="accordion-flush-heading-6-9">
                    <p class="desc">
                      This course provides opportunities for advanced students to explore applications of psychology in independently-arranged off-campus supervised practicum experiences. Practica require mastery of psychological concepts related to the designated situation. Repeatable at two different practicum sites but can only count as one elective in the general cluster.
                    </p>
                  </div>
                </div>

                <div class="section">
                  <h2 id="accordion-flush-heading-6-10" class="flex justify-between w-full gap-3">
                    <label for="PSY48000">
                      <input type="checkbox" id="PSY48000" name="PSY48000" value="PSY48000" />
                      PSY 48000 - Psychology Research Lab (1-6 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-10" aria-expanded="false" aria-controls="accordion-flush-body-6-10">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-10" class="hidden" aria-labelledby="accordion-flush-heading-6-10">
                    <p class="desc">
                      Students will plan, execute and report on a project in consultation with a faculty mentor.
                    </p>
                  </div>
                </div>

                <div class="section end-section">
                  <h2 id="accordion-flush-heading-6-11" class="flex justify-between w-full gap-3">
                    <label for="PSY48300">
                      <input type="checkbox" id="PSY48300" name="PSY48300" value="PSY48300" />
                      PSY 48300 - Senior Thesis (4 hrs)
                    </label>
                    <button type="button" class="desc flex items-center w-3" data-accordion-target="#accordion-flush-body-6-11" aria-expanded="false" aria-controls="accordion-flush-body-6-11">
                      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                      </svg>
                    </button>
                  </h2>
                  <div id="accordion-flush-body-6-11" class="hidden" aria-labelledby="accordion-flush-heading-6-11">
                    <p class="desc">
                      This is an independent research experience in which advanced students design, conduct, and write up a substantial original research project. Students are encouraged to present the results of their work at regional and/or national conferences.
                    </p>
                  </div>
                </div>


              </div>

            </div>

            <div class="flex justify-center align-items-center mt-10">
              <Link to="/results" class="gold rounded-xl lg:my-auto lg:w-100 w-60 my-20 px-5 py-20 text-4xl text-center">GET RESULTS</Link>
            </div>

          </div>

        </div>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      </main >
    );
  };

  export default Select;