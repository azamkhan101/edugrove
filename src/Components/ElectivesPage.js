import React from "react";
import CategoryHeader from "./CategoryHeader";
import CourseGrid from "./CourseGrid";
import courseData from "../Content/categories.json";

function ElectivesPage() {
  return (
    <div className='courses-page'>
      <h2>Electives</h2>
      <CategoryHeader category='Electives' />
      <CourseGrid data={courseData.electives} />
    </div>
  );
}

export default ElectivesPage;
