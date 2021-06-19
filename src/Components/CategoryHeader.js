import React from "react";

function CategoryHeader(props) {
  return (
    <div className='category-header'>
      <h1 className='category-name'>
        <i class='fas fa-medal'></i> {props.category}
      </h1>
      <div>
        <span></span>
      </div>
    </div>
  );
}

export default CategoryHeader;
