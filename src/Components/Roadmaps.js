import React from "react";
import RoadmapGrid from "./RoadmapGrid";
import roadmapData from "../Content/roadmaps.json";

function Roadmaps() {
  return (
    <div className='courses-page'>
      <h1>Roadmaps</h1>
      <RoadmapGrid data={roadmapData.roadmaps} category='roadmaps' />
    </div>
  );
}

export default Roadmaps;
