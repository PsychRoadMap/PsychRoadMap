import React from "react";

import { useState, useEffect } from "react";

import { Label, TextInput, Textarea } from "flowbite-react";
import { Checkbox } from "flowbite-react";

import { Link } from "react-router-dom";

function Admin() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>

      <div className="container-fluid jumbito">

        <div className="text-center admin jumbito-img">
          <div className="flex flex-row justify-content-center align-items-center">
            <p className="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      <div className="gold">
        .
      </div>

      <div className="select-text">
        <div className="my-5">
          <p className="lg:text-6xl text-3xl py-10"> Welcome to the admin panel. </p>
          <p> Use this page to add or remove courses from the website. </p>
          <p> Carefully enter all of the required data, then click the "submit" button to perform an administrative action. </p>
          <p> Once you leave this page, you will be logged out. </p>
        </div>

        <div className="add flex flex-col">
          <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>Add Course</b></span></p>

          <div className="my-5">
            <p> The following fields request the course identification data for the course you would like to add.</p>
            <p> These fields determine how the course will appear on the website.</p>
          </div>

          {/* DEPARTMENT */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="department" value="Department" />
              <TextInput className="max-w-100" id="department" type="text" sizing="md" placeholder="Ex. PSY, MAT, SOC ..." />
            </div>
          </div>

          {/* COURSE CODE */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="code" value="Course Code" />
              <TextInput className="max-w-100" id="code" type="text" sizing="md" placeholder="Ex. 10000, 30400, 48500 ..." />
            </div>
          </div>

          {/* COURSE NAME */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Course Name" />
              <TextInput className="max-w-100" id="name" type="text" sizing="md" placeholder="Ex. Principles of Psychology, Basic Research Methods ..." />
            </div>
          </div>

          {/* COURSE DESCRIPTION */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Course Description" />
              <Textarea id="description" placeholder="Ex. This course is an exploration of basic psychological concepts, methods, and findings contributing to an understanding of human behavior." required rows={4} />
            </div>
          </div>

          {/* COURSE CLUSTER */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Course Cluster" />
              <TextInput className="max-w-100" id="base" type="text" sizing="md" placeholder="Ex. Major, Clinical, Experimental Psychology ..." />
            </div>
          </div>

          <div className="my-5">
            <p> The following fields request the course mastery data for the course you would like to add.</p>
            <p> These fields determine how the course will relate to different career paths. </p>
            <p> Enter a number between 0-100.</p>
          </div>

          <div className="mastery flex flex-wrap">
            {/* KNOWLEDGE & WORK ACTIVITIES */}
            <div className="knowledge mx-5">
              <p className="text-xl"> <b>KNOWLEDGE</b> </p>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="psychology" value="Psychology" />
                  <TextInput id="psychology" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="sociologyandanthropology" value="Sociology and Anthropology" />
                  <TextInput id="sociologyandanthropology" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Therapy and Counseling" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>

              {/* WORK ACTIVITIES */}
              <div className="work-activities mt-10">
                <p className="text-xl"> <b>WORK ACTIVITIES</b> </p>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="psychology" value="Getting Information" />
                    <TextInput id="psychology" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="sociologyandanthropology" value="Monitoring Processes, Materials, or Surroundings" />
                    <TextInput id="sociologyandanthropology" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Identifying Objects, Actions, and Events" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Judging the Qualities of Objects, Services, or People" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Evaluating Information to Determine Compliance with Standards" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Analyzing Data or Information" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Thinking Creatively" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Updating and Using Relevant Knowledge" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing Objectives and Strategies" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Scheduling Work and Activities" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Organizing, Planning, and Prioritizing Work" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Working with Computers" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Interpreting the Meaning of Information for Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with Supervisors, Peers, or Subordinates" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Establishing and Maintaining Interpersonal Relationships" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Resolving Conflicts and Negotiating with Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coordinating the Work and Activities of Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing and Building Teams" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coaching and Developing Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing Administrative Activities" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Documenting/Recording Information" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Making Decisions and Solving Problems" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with People Outside the Organization" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Assisting and Caring for Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Selling or Influencing Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Guiding, Directing, and Motivating Subordinates" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Training and Teaching Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Providing Consultation and Advice to Others" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing for or Working Directly with the Public" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Staffing Organizational Units" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Monitoring and Controlling Resources" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Processing Information" />
                    <TextInput id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
              </div>

            </div>

            {/* SKILLS & ABILITIES */}
            <div className="skills mx-5">
              <p className="text-xl"> <b>SKILLS</b> </p>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="psychology" value="Reading Comprehension" />
                  <TextInput id="psychology" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="sociologyandanthropology" value="Active Listening" />
                  <TextInput id="sociologyandanthropology" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Writing" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Speaking" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Science" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Critical Thinking " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Active Learning " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Learning Strategies " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Monitoring " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Social Perceptiveness " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coordination " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Persuasion " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Negotiation" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Service Orientation " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Complex Problem Solving " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Time Management " />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Judgment and Decision Making" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Mathematics" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-2 block">
                  <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Instructing" />
                  <TextInput id="therapyandcounseling" type="text" sizing="md" />
                </div>
              </div>

              {/* ABILITIES */}
              <div className="abilities mt-10">
                <p className="text-xl"> <b>ABILITIES</b> </p>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="psychology" value="Oral Comprehension" />
                    <TextInput className="w-80" id="psychology" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="sociologyandanthropology" value="Written Comprehension" />
                    <TextInput className="w-80" id="sociologyandanthropology" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Oral Expression" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Written Expression" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Fluency of Ideas" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Originality" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Problem Sensitivity" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Deductive Reasoning" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Inductive Reasoning" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Mathematical Reasoning" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Memorization" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Speed of Closure" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Selective Attention" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Time Sharing" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Speech Recognition" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-2 block">
                    <Label className="w-80 text-wrap" htmlFor="therapyandcounseling" value="Speech Clarity" />
                    <TextInput className="w-80" id="therapyandcounseling" type="text" sizing="md" />
                  </div>
                </div>
              </div>

            </div>


          </div>

          <p className="my-5">
            <Link to="/admin" class="secondary rounded-xl w-30 my-5 px-2 py-2 text-xl text-center"><b>ADD</b></Link>
          </p>

        </div>

        <div className="delete">
          <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>Delete Course</b></span></p>
          <div className="my-5">
            <p> The following fields request the necessary course identification data for the course you would like to delete.</p>
            <p> Course deletion <b>CANNOT BE UNDONE!</b> </p>
            <p> Proceed with extreme care. </p>
          </div>

          {/* DEPARTMENT */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="department" value="Department" />
              <TextInput className="max-w-100" id="department" type="text" sizing="md" placeholder="Ex. PSY, MAT, SOC ..." />
            </div>
          </div>

          {/* COURSE CODE */}
          <div className="flex">
            <div className="mb-2 block">
              <Label htmlFor="code" value="Course Code" />
              <TextInput className="max-w-100" id="code" type="text" sizing="md" placeholder="Ex. 10000, 30400, 48500 ..." />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="delete" className="check" />
            <Label htmlFor="accept" className="text-base">
              I understand that this action is <b>PERMANENT</b> and <b>CANNOT BE UNDONE</b>
            </Label>
          </div>

          <p className="my-5 pb-10">
            <Link to="/admin" class="secondary rounded-xl w-30 my-5 px-2 py-2 text-xl text-center"><b>DELETE</b></Link>
          </p>

        </div>

      </div>

      <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </main >
  );
};

export default Admin;