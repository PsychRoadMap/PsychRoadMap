import React, { useState, useEffect } from "react";

function Category({ data, category }) {


  return (
    <>
      <div className="card m-5">
        <div className="card-title text-center">
          <p>{category}</p>
        </div>
        {data.data.map((course) => {
          const courseID = course.department + course.course_code;
          if (course.course_cluster == cluster) {
            return (
              <div className="card-job ">
                <p>This is a potential career</p>
              </div>
            );
          }
        })}
      </div>

    </>
  )

};

export default Category;