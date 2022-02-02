import { useState } from "react";
import BestScore from "./components/BestScore";
import CardContainer from "./components/CardContainer";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const checkBest = () => {
    if (clickedCards.length >= bestScore) {
      setBestScore((prevState) => {
        return prevState + 1;
      });
    }
  };

  const addCardId = (id) => {
    if (clickedCards.includes(id)) {
      setClickedCards([]);
    } else {
      setClickedCards((prevState) => {
        return [...prevState, id];
      });
      checkBest();
    }
  };

  return (
    <div className="App">
      <h1>Memory Card</h1>
      <Scoreboard currentScore={clickedCards.length} />
      <BestScore bestScore={bestScore} />
      <CardContainer addCardId={addCardId} />
    </div>
  );
}

export default App;
