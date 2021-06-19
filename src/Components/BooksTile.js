import React from "react";

function ResourceTile(props) {
  return (
    <div className='resource-tile'>
      <div className='resource-badge'>
        <i class='fas fa-book'></i>
      </div>
      <a href={props.link} target='blank'>
        <h3 className='resource-name'>{props.name}</h3>
      </a>
    </div>
  );
}

export default ResourceTile;
