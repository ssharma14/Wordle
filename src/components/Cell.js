import React, { useContext, useEffect } from 'react';
import { AppContext } from "./Game";
import { decodeSolution } from "../lib/encryption";

const Cell = ({ status, letterpos, rowpos, letter }) => {
  const {board, currGuess, correctWord, setLetterStatus} = useContext(AppContext);
  letter = board[rowpos][letterpos];
  const correct = decodeSolution(correctWord).toUpperCase()[letterpos] === letter;

  if(letter === "" ){
      status = -1;
  } else if(letter !== "" && !correct && !decodeSolution(correctWord).toUpperCase().includes(letter)){
    status = 0;
  }
  else if(letter !== "" && !correct && decodeSolution(correctWord).toUpperCase().includes(letter)){
    status = 1;
  } else if(letter !== "" && correct){
      status = 2
  }

  

  const getClass = () => {
    let c = 'cell cell-'
    if (status === -2) {
      c += 'active';
    } else if (status === -1) {
      c += 'default';
    } else if (status === 0 && currGuess.guess > rowpos) {
      c += 'wrong';
    } else if (status === 1 && currGuess.guess > rowpos) {
      c += 'close';
    } else if (status === 2 && currGuess.guess > rowpos) {
      c += 'correct';
    } else {
      c += 'default';
    }
      
      return c
  }

  useEffect((status, letter) => {
    if (status === 0 || status === 2 || status === 1) {
      setLetterStatus((prev) => [...prev, [letter, status]]);
    }
  }, [currGuess.guess]);

  return (
    <div className={ getClass()} rowpos={rowpos} letterpos={letterpos}>{letter}</div>
  );
}

export default Cell