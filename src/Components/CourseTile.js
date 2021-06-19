import React from "react";
import { Link } from "react-router-dom";

function CourseTile({ Coursename, courseId, Category }) {
  return (
    <Link to={`/subject/${courseId}`}>
      <div className={`course-tile ${Category}`}>
        <p>{Coursename}</p>
      </div>
    </Link>
  );
}

export default CourseTile;
