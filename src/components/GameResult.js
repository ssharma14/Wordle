import React, { useContext } from "react";
import { AppContext } from "./Game";
import { decodeSolution } from "../lib/encryption";

export const GameResult = (props) => {
  const { currGuess, gameResult, correctWord} = useContext(AppContext);
  return (
    <div className="gameResult" id="gameResult">
        <div className="gameContent">
          <div className="closeGame" onClick={() => closeAlert()}>X</div>
          <div className="content">
              <h3>
                {gameResult.guessedWord
                  ? "You Correctly Guessed the Wordle"
                  : "You Failed to Guess the Word"}
              </h3>
              <h5>Correct Word: {decodeSolution(correctWord)}</h5>
              {gameResult.guessedWord && (
                <p>You guessed in {currGuess.guess} attempts</p>
              )}
              <button className='bigbutton' onClick={props.onClick}>Play again</button>
          </div>
        </div>
    </div>
  );
}

export const closeAlert = () => {
  let element = document.getElementById("gameResult")
  if (!element) return
  element.style.opacity = '0'
  element.style.visibility = 'hidden'
}
