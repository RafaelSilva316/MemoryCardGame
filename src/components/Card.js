import React from "react";

function Card(props) {
  return (
    <div
      className="Card"
      // onClick={props.onClickShuffle}
      onClick={() => {
        props.addCardId(props.id);
        props.onClickShuffle();
      }}
    >
      <img src={props.src} alt="placeholder"></img>
      <p>{props.name}</p>
    </div>
  );
}

export default Card;
