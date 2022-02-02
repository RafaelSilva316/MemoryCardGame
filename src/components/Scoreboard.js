import React, { useState } from "react";

function Scoreboard(props) {
  //const [currScore, setCurrScore] = useState(0);
  return <div className="scoreboard">Current Score: {props.currentScore}</div>;
}

export default Scoreboard;
