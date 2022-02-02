import React, { useState } from "react";

function BestScore(props) {
  return <div className="scoreboard">Best Score: {props.bestScore}</div>;
}

export default BestScore;
