import { Accordion } from "flowbite-react";

import React, { useState, useEffect } from "react";

function Cluster({ data, cluster, checkboxes, setCheckboxes, handleCheckboxChange }) {

  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

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

  // stop accordion/checkbox interference
  const stopProp = (e) => {
    e.stopPropagation();
  };

  // clear section
  const clearSection = (id) => {

    const clearedCheckboxes = { ...checkboxes };

    // Identify which section needs cleared
    data.data.forEach(course => {
      if (course.course_cluster == id.target.id) {
        var courseID = course.department + course.course_code;
        clearedCheckboxes[courseID] = false;
      }
    })

    setCheckboxes(clearedCheckboxes);
    localStorage.setItem('checkboxes', JSON.stringify(clearedCheckboxes));
  };


  return (
    <>
      <p className="gold my-5 py-2 text-3xl flex justify-between"><span><b>{cluster} Coursework</b></span><span>
        <button className="text-base border border-black py-1 px-2 clear" id={cluster} onClick={clearSection}>Clear</button></span></p>
      <Accordion flush={true} alwaysOpen={true} collapseAll={true}>

        {data.data.map((course) => {
          const courseID = course.department + course.course_code;
          if (course.course_cluster == cluster) {
            return (
              <Accordion.Panel key={courseID}>
                <div className="section">
                  <Accordion.Title className='flex justify-between w-full gap-3'>
                    <label htmlFor={courseID} onClick={stopProp}>
                      <input
                        type="checkbox"
                        id={courseID}
                        name={courseID}
                        value={courseID}
                        checked={checkboxes[courseID] || false}
                        onChange={handleCheckboxChange}
                      />
                      {courseID} - {course.course_name}
                    </label>
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="desc">
                      {course.course_description}
                    </p>
                  </Accordion.Content>
                </div>
              </Accordion.Panel>
            );
          }
          else {
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