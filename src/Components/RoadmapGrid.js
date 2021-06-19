import React from "react";
import RoadmapTile from "./RoadmapsTile";

function RoadmapGrid({ data, category }) {
  return (
    <div className='tile-holder'>
      {data.map((roadmap) => (
        <RoadmapTile
          roadmap={roadmap.name}
          roadmapId={roadmap.id}
          Category={category}
        />
      ))}
    </div>
  );
}

export default RoadmapGrid;
