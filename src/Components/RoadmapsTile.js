import React from "react";
import { Link } from "react-router-dom";

function RoadmapsTile({ roadmap, roadmapId, Category }) {
  return (
    <div>
      <Link to={`/roadmap/${roadmapId}`}>
        <div className={`roadmaps-tile ${Category}`}>
          <p>{roadmap}</p>
        </div>
      </Link>
    </div>
  );
}

export default RoadmapsTile;
