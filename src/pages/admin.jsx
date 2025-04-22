import React from "react";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Label, TextInput, Textarea, Modal, ModalBody, ModalHeader, Button } from "flowbite-react";
import { Checkbox } from "flowbite-react";

import { Link } from "react-router-dom";

function Admin() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);

  const [currCourse, setCurrCourse] = useState("null");
  const [currCourseID, setCurrCourseID] = useState("null");
  const [currCourseName, setCurrCourseName] = useState("null");


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://cvdvtzqdkapqvorfgwox.supabase.co/functions/v1/course-info');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (e) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function onCloseModal() {

    setOpenAddModal(false);
    setOpenEditModal(false);
    setOpenDelModal(false);
  }

  function checkID() {
    if (document.getElementById("courseID").value == currCourseID) {
      onCloseModal();
    }
  }

  function logOut() {
    location.reload();
  }

  const updateCurr = (id) => {

    var listBox = document.getElementById("listBox");

    if (listBox.selectedIndex > 0) {
      document.getElementById("noSelect").classList.add("hidden");
      var value = document.getElementById("listBox").value;
      var split = value.split(" - ");
      setCurrCourseID(split[0]);
      setCurrCourseName(split[1]);
      setCurrCourse(data.data[listBox.selectedIndex]);

      if (id.target.id == "edit")
        setOpenEditModal(true);
      else if (id.target.id == "del")
        setOpenDelModal(true);
      else if (id.target.id == "add")
        setOpenAddModal(true);
    }
    else if (id.target.id == "add") {
      setOpenAddModal(true);
    }
    else {
      document.getElementById("noSelect").classList.remove("hidden");
      console.log("NO COURSE SELECTED");
    }
  }

  if (loading) {
    return (
      <main>
        <div className="container-fluid jumbito">

          <div className="text-center jumbito-img">
            <div className="flex flex-row justify-content-center align-items-center">
              <p className="lg:w-500 text-white lg:text-8xl text-4xl lg:text-start text-center w-400 jumbito-text">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <div className="gold">
          <p className="period">.</p>
        </div>
      </main>
    )
  }

  if (!loading && data) {
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
            <p className="lg:text-6xl text-3xl py-10 flex justify-between content-center"> Welcome to the admin panel. <span className="text-base content-center"><button id="logOut" className="m-2 p-1 clear" onClick={logOut}>Log Out</button></span></p>
            <p> Use this page to add, remove or edit courses on the website. </p>
            <p> Please remember to log out when you are finished. </p>
          </div>

          <div className="add flex flex-col">
            <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>Current Courses</b></span></p>

            <select id="listBox" className="w-full listBox" name="courses" multiple>
              {data.data.map((course) => {
                const courseID = course.department + course.course_code;
                return (
                  <option className="text-lg p-5 overflow-hidden" value={courseID + " - " + course.course_name}>
                    {/* course title */}
                    {courseID} - {course.course_name}
                  </option>
                )
              }
              )};
            </select>

            <div className="flex justify-center mb-2">
              <button id="add" className="m-2 p-1 clear" onClick={updateCurr}>Add New Course</button>
              <button id="edit" className="m-2 p-1 clear" onClick={updateCurr}>Edit Course</button>
              <button id="del" className="m-2 p-1 clear" onClick={updateCurr}>Delete Course</button>
            </div>
            <p id="noSelect" className="text-center font-bold mb-5 hidden">Please select a course.</p>

          </div>

        </div>

        {/* add course */}
        <Modal
          show={openAddModal}
          dialogClassName="modal"
          size="7xl"
          onClose={onCloseModal}
          popup
          theme={{
            root: {
              show: {
                on: 'flex bg-gray-900/50',
              }
            },
            content: {
              base: 'max-h-full',
            }
          }}>
          <ModalHeader>
            <p className="px-4 pt-4 text-3xl"><span><b>Add Course</b></span></p>
          </ModalHeader>
          <ModalBody>
            <div>
              <div>
                <p>
                  Here is where you can add a new course.
                </p>

                <p className="py-2">
                  Please fill out all of the information carefully.
                </p>

                <p className="text-xl"> <b>CORE INFO</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  {/* DEPARTMENT */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="department" value="Department" />
                      <TextInput required id="department" type="text" sizing="md" placeholder="Ex. PSY, MAT, SOC ..." />
                    </div>
                  </div>
                  {/* COURSE CODE */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="code" value="Course Code" />
                      <TextInput required id="code" type="text" sizing="md" placeholder="Ex. 10000, 30400, 48500 ..." />
                    </div>
                  </div>
                  {/* COURSE NAME */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Course Name" />
                      <TextInput required id="name" type="text" sizing="md" placeholder="Ex. Principles of Psychology ..." />
                    </div>
                  </div>
                  {/* COURSE CLUSTER */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Course Cluster" />
                      <TextInput required id="base" type="text" sizing="md" placeholder="Ex. Major, Clinical ..." />
                    </div>
                  </div>
                  {/* COURSE DESCRIPTION */}
                  <div className="flex">
                    <div className="mb-2 w-100 block">
                      <Label htmlFor="description" value="Course Description" />
                      <Textarea id="description" placeholder="Ex. This course is an exploration of basic psychological concepts, methods, and findings contributing to an understanding of human behavior." rows={4} />
                    </div>
                  </div>
                </div>

                <p className="py-2">
                  Please enter a number between 1-100 for the following fields:
                </p>

                {/* KNOWLEDGE*/}
                <p className="text-xl"> <b>KNOWLEDGE</b> </p>
                <div className="flex flex-row flex-wrap bundle">

                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Psychology" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Sociology and Anthropology" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Therapy and Counseling" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <p className="text-xl"> <b>SKILLS</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Reading Comprehension" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Active Listening" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Writing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speaking" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Science" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Critical Thinking " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Active Learning " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Learning Strategies " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Monitoring " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Social Perceptiveness " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Coordination " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Persuasion " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Negotiation" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Service Orientation " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Complex Problem Solving " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Time Management " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Judgment and Decision Making" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Mathematics" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Instructing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* ABILITIES */}
                <p className="text-xl"> <b>ABILITIES</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Oral Comprehension" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Written Comprehension" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Oral Expression" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Written Expression" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Fluency of Ideas" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Originality" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Problem Sensitivity" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Deductive Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Inductive Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Mathematical Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Memorization" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speed of Closure" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Selective Attention" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Time Sharing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speech Recognition" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speech Clarity" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* WORK ACTIVITIES */}
                <p className="text-xl"> <b>WORK ACTIVITIES</b> </p>
                <div className="flex flex-row flex-wrap bundle big">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="psychology" value="Getting Information" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="sociologyandanthropology" value="Monitoring Processes, Materials, or Surroundings" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Identifying Objects, Actions, and Events" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Judging the Qualities of Objects, Services, or People" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Evaluating Information to Determine Compliance with Standards" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Analyzing Data or Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Thinking Creatively" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Updating and Using Relevant Knowledge" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing Objectives and Strategies" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Scheduling Work and Activities" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Organizing, Planning, and Prioritizing Work" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Working with Computers" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Interpreting the Meaning of Information for Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with Supervisors, Peers, or Subordinates" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Establishing and Maintaining Interpersonal Relationships" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Resolving Conflicts and Negotiating with Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coordinating the Work and Activities of Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing and Building Teams" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coaching and Developing Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing Administrative Activities" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Documenting/Recording Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Making Decisions and Solving Problems" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with People Outside the Organization" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Assisting and Caring for Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Selling or Influencing Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Guiding, Directing, and Motivating Subordinates" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Training and Teaching Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Providing Consultation and Advice to Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing for or Working Directly with the Public" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Staffing Organizational Units" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Monitoring and Controlling Resources" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Processing Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button id="confirmAdd" className="mt-2 p-2 mx-2 clear min-w-30" onClick={onCloseModal}>Add Course</button>
                  <button id="cancel" className="mt-2 p-2 mx-2 clear min-w-30" onClick={onCloseModal}>Cancel</button>
                </div>

              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* edit course */}
        <Modal
          show={openEditModal}
          dialogClassName="modal"
          size="7xl"
          onClose={onCloseModal}
          popup
          theme={{
            root: {
              show: {
                on: 'flex bg-gray-900/50',
              }
            },
            content: {
              base: 'max-h-full',
            }
          }}>
          <ModalHeader>
            <p className="px-4 pt-4 text-3xl"><span><b>Edit Course</b></span></p>
          </ModalHeader>
          <ModalBody>
            <div>
              <div>
                <p>
                  You are editing the following course:
                </p>

                <div className="text-center text-lg py-2"><b>{currCourseID} - {currCourseName}</b></div>

                <p className="py-2">
                  Please be aware that there is no "undo" button. Any changes made must be reversed manually.
                </p>

                <p className="text-xl"> <b>CORE INFO</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  {/* DEPARTMENT */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="department" value="Department" />
                      <TextInput required id="department" type="text" sizing="md" defaultValue={currCourse.department} />
                    </div>
                  </div>
                  {/* COURSE CODE */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="code" value="Course Code" />
                      <TextInput required id="code" type="text" sizing="md" defaultValue={currCourse.course_code} />
                    </div>
                  </div>
                  {/* COURSE NAME */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Course Name" />
                      <TextInput required id="name" type="text" sizing="md" defaultValue={currCourse.course_name} />
                    </div>
                  </div>
                  {/* COURSE CLUSTER */}
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label htmlFor="base" value="Course Cluster" />
                      <TextInput required id="base" type="text" sizing="md" defaultValue={currCourse.course_cluster} />
                    </div>
                  </div>
                  {/* COURSE DESCRIPTION */}
                  <div className="flex">
                    <div className="mb-2 w-100 block">
                      <Label htmlFor="description" value="Course Description" />
                      <Textarea id="description" defaultValue={currCourse.course_description} rows={4} />
                    </div>
                  </div>
                </div>

                {/* KNOWLEDGE*/}
                <p className="text-xl"> <b>KNOWLEDGE</b> </p>
                <div className="flex flex-row flex-wrap bundle">

                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Psychology" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Sociology and Anthropology" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Therapy and Counseling" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <p className="text-xl"> <b>SKILLS</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Reading Comprehension" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Active Listening" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Writing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speaking" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Science" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Critical Thinking " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Active Learning " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Learning Strategies " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Monitoring " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Social Perceptiveness " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Coordination " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Persuasion " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Negotiation" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Service Orientation " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Complex Problem Solving " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Time Management " />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Judgment and Decision Making" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Mathematics" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Instructing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* ABILITIES */}
                <p className="text-xl"> <b>ABILITIES</b> </p>
                <div className="flex flex-row flex-wrap bundle">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="psychology" value="Oral Comprehension" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="sociologyandanthropology" value="Written Comprehension" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Oral Expression" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Written Expression" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Fluency of Ideas" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Originality" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Problem Sensitivity" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Deductive Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Inductive Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Mathematical Reasoning" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Memorization" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speed of Closure" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Selective Attention" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Time Sharing" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speech Recognition" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className="text-wrap" htmlFor="therapyandcounseling" value="Speech Clarity" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                {/* WORK ACTIVITIES */}
                <p className="text-xl"> <b>WORK ACTIVITIES</b> </p>
                <div className="flex flex-row flex-wrap bundle big">
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="psychology" value="Getting Information" />
                      <TextInput required id="psychology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="sociologyandanthropology" value="Monitoring Processes, Materials, or Surroundings" />
                      <TextInput required id="sociologyandanthropology" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Identifying Objects, Actions, and Events" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Judging the Qualities of Objects, Services, or People" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Evaluating Information to Determine Compliance with Standards" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Analyzing Data or Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Thinking Creatively" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Updating and Using Relevant Knowledge" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing Objectives and Strategies" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Scheduling Work and Activities" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Organizing, Planning, and Prioritizing Work" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Working with Computers" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Interpreting the Meaning of Information for Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with Supervisors, Peers, or Subordinates" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Establishing and Maintaining Interpersonal Relationships" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Resolving Conflicts and Negotiating with Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coordinating the Work and Activities of Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Developing and Building Teams" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Coaching and Developing Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing Administrative Activities" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Documenting/Recording Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Making Decisions and Solving Problems" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Communicating with People Outside the Organization" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Assisting and Caring for Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Selling or Influencing Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Guiding, Directing, and Motivating Subordinates" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Training and Teaching Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Providing Consultation and Advice to Others" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Performing for or Working Directly with the Public" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Staffing Organizational Units" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Monitoring and Controlling Resources" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-2 block">
                      <Label className=" text-wrap" htmlFor="therapyandcounseling" value="Processing Information" />
                      <TextInput required id="therapyandcounseling" type="text" sizing="md" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button id="confirmEdit" className="mt-2 p-2 mx-2 clear min-w-30" onClick={onCloseModal}>Update Course</button>
                  <button id="cancel" className="mt-2 p-2 mx-2 clear min-w-30" onClick={onCloseModal}>Cancel</button>
                </div>

              </div>
            </div>
          </ModalBody>
        </Modal>

        {/* delete course */}
        <Modal
          show={openDelModal}
          dialogClassName="modal"
          size="7xl"
          onClose={onCloseModal}
          popup
          theme={{
            root: {
              show: {
                on: 'flex bg-gray-900/50',
              }
            },
            content: {
              base: 'max-h-full',
            }
          }}>
          <ModalHeader>
            <p className="px-4 pt-4 text-3xl"><span><b>Delete Course</b></span></p>
          </ModalHeader>
          <ModalBody>
            <div>
              <div>
                <p>
                  Are you sure you want to delete the following course?
                </p>

                <div className="text-center text-lg py-2"><b>{currCourseID} - {currCourseName}</b></div>

                <p className="py-2">
                  Course deletion is <b>permanent</b> and <b>irreversible</b>.
                </p>
                <p className="py-2">
                  To confirm course deletion, please re-enter the course ID.
                </p>
                <div className="my-2 block">
                  <Label htmlFor="courseID">Re-enter course ID:</Label>
                </div>
                <TextInput
                  required id="courseID"
                  placeholder={currCourseID}
                  onChange={() => document.getElementById}
                />
                <div className="flex justify-center">
                  <button id="confirmDel" className="mt-2 p-2 mx-2 clear min-w-30" onClick={checkID}>Delete Course</button>
                  <button id="cancel" className="mt-2 p-2 mx-2 clear min-w-30" onClick={onCloseModal}>Cancel</button>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

      </main >
    );
  };
};

export default Admin;