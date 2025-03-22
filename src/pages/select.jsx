import { Accordion } from "flowbite-react";

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Cluster from "../components/cluster.jsx";


const Select = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkboxes, setCheckboxes] = useState({});
  const [loaded, setLoaded] = useState(false);

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
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // get checkbox values
  useEffect(() => {
    if (!loading && data) {
      // check if saved checkboxes exist in localStorage
      const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes'));
      if (savedCheckboxes) {
        setCheckboxes(savedCheckboxes);
      } else {
        // if no saved checkboxes, initialize to false
        const initialCheckboxes = {};
        data.data.forEach(course => {
          const courseID = course.department + course.course_code;
          initialCheckboxes[courseID] = false;
        });
        setCheckboxes(initialCheckboxes);
      }
      setLoaded(true);
    }
  }, [loading, data]);

  // save the checkbox states to localStorage on change
  useEffect(() => {
    if (loaded)
      localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }, [checkboxes, loaded]);

  // handle checkbox change
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // clear all checkboxes
  const clearAll = () => {
    const clearedCheckboxes = { ...checkboxes };

    data.data.forEach(course => {
      const courseID = course.department + course.course_code;
      clearedCheckboxes[courseID] = false;
    });

    setCheckboxes(clearedCheckboxes);
    localStorage.setItem('checkboxes', JSON.stringify(clearedCheckboxes));
  };

  // get all course clusters
  function clusterMap() {

    var clusterArr = {};
    data.data.map(course => {
      clusterArr[course.course_cluster] = course.course_cluster;
    })

    return clusterArr;

  }

  if (loading || !checkboxes) {
    return (
      <main>
        <div className="container-fluid jumbito">

          <div className="text-center jumbito-img">
            <div className="flex flex-row justify-content-center align-items-center">
              <p className="block lg:w-500 text-white lg:text-8xl md:text-6xl text-4xl lg:text-start text-center w-400 text-wrap jumbito-text">
                Select your courses!
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

          <div className="text-center jumbito-img">
            <div className="flex flex-row justify-content-center align-items-center">
              <p className="block lg:w-500 text-white lg:text-8xl md:text-6xl text-4xl lg:text-start text-center w-400 text-wrap jumbito-text">
                Select your courses!
              </p>
            </div>
          </div>
        </div>

        <div className="gold">
          <p className="period">.</p>
        </div>

        {/* SELECTION SECTION */}
        <div className="select-text bg-white pb-10">
          <p className="text-base py-5">
            Select all of the Psychology courses you have taken or plan to take as you work towards your degree.
            Once you have finished selecting your courses,
            press the "Generate Results" button at the bottom of the page to see what career paths PsychRoadMap suggests for you!
          </p>
          <p><button className="mt-2 p-1 clear text-center" onClick={clearAll}>Clear All</button></p>

          {/* ACCORDION */}
          {Object.keys(clusterMap()).map(function (cluster) {
            return (
              <Cluster
                key={cluster}
                data={data}
                cluster={cluster}
                checkboxes={checkboxes}
                setCheckboxes={setCheckboxes}
                handleCheckboxChange={handleCheckboxChange}
              />
            )
          })}


          <div className="flex justify-center align-items-center mt-10">
            <Link to="/results" className="secondary rounded-xl lg:my-auto lg:w-100 w-60 my-20 px-5 py-20 text-4xl text-center"><b>GET RESULTS</b></Link>
          </div>

        </div>
        <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
      </main >
    );
  }
};

export default Select;