import React from "react";
import roadmapData from "../Content/roadmaps.json";

function Roadmap(props) {
  const id = props.match.params.id;
  return (
    <div>
      <h1 className='roadmap-title'>{roadmapData.roadmaps[id - 1].name}</h1>
      <img src={roadmapData.roadmaps[id - 1].image} alt='' srcset='' />
    </div>
  );
}

export default Roadmap;
