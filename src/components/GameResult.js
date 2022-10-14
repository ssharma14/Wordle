import React, { useContext } from "react";
import { AppContext } from "../App";

function GameResult() {
  const { currGuess, gameResult, correctWord} = useContext(AppContext);
  return (
    <div className="gameResult">
      <h3>
        {gameResult.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameResult.guessedWord && (
        <h3>You guessed in {currGuess.guess} attempts</h3>
      )}
    </div>
  );
}

export default GameResult;
