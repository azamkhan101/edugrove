import React from "react";

function WebsiteTile(props) {
  return (
    <div className='resource-tile'>
      <div className='resource-badge'>
        <i class='fas fa-laptop-code'></i>
      </div>
      <a href={props.link} target='blank'>
        <h3 className='resource-name'>{props.name}</h3>
      </a>
    </div>
  );
}

export default WebsiteTile;
