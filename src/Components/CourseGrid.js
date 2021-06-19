import React from "react";
import CourseTile from "./CourseTile";

function CourseGrid({ data, category }) {
  return (
    <div className='tile-holder'>
      {data.map((course) => (
        <CourseTile
          Coursename={course.name}
          courseId={course.id}
          Category={category}
        />
      ))}
    </div>
  );
}

export default CourseGrid;
