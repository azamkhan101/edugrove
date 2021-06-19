import React from "react";
import CategoryHeader from "./CategoryHeader";
import CourseGrid from "./CourseGrid";
import courseData from "../Content/categories.json";

function CoursePage() {
  return (
    <div className='courses-page'>
      <h2>Courses</h2>
      <CategoryHeader category='First year' />
      <CourseGrid data={courseData.first} />
      <CategoryHeader category='Second year' />
      <CourseGrid data={courseData.second} />
      <CategoryHeader category='Third year' />
      <CourseGrid data={courseData.third} />
    </div>
  );
}

export default CoursePage;
