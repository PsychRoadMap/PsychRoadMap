import { Accordion } from "flowbite-react";
import React, { useState, useEffect } from "react";

function Cluster({ data, cluster, checkboxes, setCheckboxes, handleCheckboxChange }) {

  // determine if the page is loaded
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // get checkbox values
  useEffect(() => {
    // if the page is not loading and data is accessible
    if (!loading && data) {
      // check if saved checkboxes exist in localStorage
      const savedCheckboxes = JSON.parse(localStorage.getItem('checkboxes'));
      if (savedCheckboxes) {
        setCheckboxes(savedCheckboxes);
      }
      else {
        // if no saved checkboxes, initialize to all to false
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

  // stop accordion/checkbox interference
  const stopProp = (e) => {
    e.stopPropagation();
  };

  // clear section
  const clearSection = (id) => {

    const clearedCheckboxes = { ...checkboxes };

    // identify which section needs cleared
    data.data.forEach(course => {
      // if the course is in the cluster, clear checkbox
      if (course.course_cluster == id.target.id) {
        var courseID = course.department + course.course_code;
        clearedCheckboxes[courseID] = false;
      }
    })

    // update checkbox values in JSON file
    setCheckboxes(clearedCheckboxes);
    localStorage.setItem('checkboxes', JSON.stringify(clearedCheckboxes));
  };

  return (
    <>
      {/* cluster title */}
      <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>{cluster} Coursework</b></span><span>
        {/* cluster clear button */}
        <button className="text-base border border-black py-1 px-2 clear" id={cluster} onClick={clearSection}>Clear</button></span>
      </p>

      {/* cluster accordion */}
      <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

        {/* for each course... */}
        {data.data.map((course) => {

          {/* define courseID  */ }
          const courseID = course.department + course.course_code;

          {/* 
            if course cluster matches called cluster, 
            create new accordion panel containing specific course information 
          */}
          if (course.course_cluster == cluster) {
            return (
              <Accordion.Panel key={courseID}>
                <div className="section">

                  <Accordion.Title className='flex justify-between w-full gap-3'>
                    {/* course checkbox */}
                    <label htmlFor={courseID} onClick={stopProp}>
                      <input
                        type="checkbox"
                        id={courseID}
                        name={courseID}
                        value={courseID}
                        checked={checkboxes[courseID] || false}
                        onChange={handleCheckboxChange}
                      />
                      {/* course title */}
                      {courseID} - {course.course_name}
                    </label>
                  </Accordion.Title>

                  <Accordion.Content>
                    <p className="desc">
                      {/* course description */}
                      {course.course_description}
                    </p>
                  </Accordion.Content>
                  
                </div>
              </Accordion.Panel>
            );
          } 
          else {
            {/* if there are no courses to pull, return hidden empty accordion panel */}
            return (
              <Accordion.Panel className="hidden">
                <Accordion.Title className="hidden">
                </Accordion.Title>
                <Accordion.Content className="hidden">
                </Accordion.Content>
              </Accordion.Panel>
            );
          }

        })}
      </Accordion>
    </>
  )

};

export default Cluster;