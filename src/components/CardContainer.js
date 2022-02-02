import React, { useState } from "react";
import Card from "./Card";
import carlJungUrl from "../img/CarlJung.jpg";
import maslowUrl from "../img/AbrahamMaslow.webp";
import skinnerUrl from "../img/BFSkinner.webp";
import tulvingUrl from "../img/EndelTulving.jpg";
import pavlovUrl from "../img/IvanPavlov.jpg";
import addamsUrl from "../img/JaneAddams.jpg";
import brothersUrl from "../img/JoyceBrothers.jpg";
import kambonUrl from "../img/KobiKambon.jpg";
import feldmanUrl from "../img/LisaFeldman.jpg";
import bernalUrl from "../img/MarthaBernal.jpg";
import daSilveiraUrl from "../img/NiseDaSilveira.png";
import freireUrl from "../img/PauloFreire.jpg";

const cardsList = [
  { id: 1, srcUrl: carlJungUrl, name: "Carl Jung" },
  { id: 2, srcUrl: maslowUrl, name: "Abraham Maslow" },
  { id: 3, srcUrl: skinnerUrl, name: "BF Skinner" },
  { id: 4, srcUrl: tulvingUrl, name: "Endel Tulving" },
  { id: 5, srcUrl: pavlovUrl, name: "Ivan Pavlov" },
  { id: 6, srcUrl: addamsUrl, name: "Jane Addams" },
  { id: 7, srcUrl: brothersUrl, name: "Joyce Brothers" },
  { id: 8, srcUrl: kambonUrl, name: "Kobi Kambon" },
  { id: 9, srcUrl: feldmanUrl, name: "Lisa Feldman" },
  { id: 10, srcUrl: bernalUrl, name: "Martha Bernal" },
  { id: 11, srcUrl: daSilveiraUrl, name: "Nise da Silveiria" },
  { id: 12, srcUrl: freireUrl, name: "Paulo Freire" },
];

function CardContainer(props) {
  const [listOfCards, setListOfCards] = useState(cardsList);

  const shuffle = (regList) => {
    let shuffled = cardsList
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  const handleClickShuffle = () => {
    console.log("shuffling");
    setListOfCards(shuffle(listOfCards));
  };

  return (
    <div className="CardContainer">
      {listOfCards.map((cardObj) => {
        return (
          <Card
            key={cardObj.id}
            id={cardObj.id}
            onClickShuffle={handleClickShuffle}
            addCardId={props.addCardId}
            src={cardObj.srcUrl}
            name={cardObj.name}
          />
        );
      })}
      <button onClick={handleClickShuffle}>SHUFFLE</button>
    </div>
  );
}

export default CardContainer;
