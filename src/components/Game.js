import Board, {initialBoard} from './Board';
import Keyboard from './Keyboard';
import { GameResult, closeAlert } from "./GameResult";
import { generateWordSet } from "./Words";
import React , { useState, createContext, useEffect } from "react";
export const AppContext = createContext();



const Game = (props) => {
    const [board, setBoard] = useState(initialBoard);
    const [currGuess, setCurrGuess] = useState({ guess: 0, letterpos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [letterStatus, setLetterStatus] = useState([]);
    const [gameResult, setGameResult] = useState({
        gameOver: false,
        guessedWord: false,
    });

    useEffect(() => {
        generateWordSet().then((words) => {
          setWordSet(words.wordSet);
          setCorrectWord(words.todaysWord);
        });
      }, []); 
    
    const onEnter = () =>{
        //Checking if word enetered is correct dictonary word
        if(currGuess.letterpos !== 5){
            alert("Not enough letters");
            return;
        }
        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += board[currGuess.guess][i];
        }
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrGuess({ guess: currGuess.guess + 1, letterpos: 0 });
        } else {
            alert("Not in word list");
        }
        console.log(correctWord);
        if (currWord.toLowerCase() === correctWord) {
            setGameResult({ gameOver: true, guessedWord: true });
            return;
        }
        if (currGuess.guess === 5) {
            setGameResult({ gameOver: true, guessedWord: false });
            return;
        }
    }
    
    const onDelete = () =>{
        if(currGuess.letterpos === 0) return;
        const newBoard = [...board];
        newBoard[currGuess.guess][currGuess.letterpos - 1] = "";
        setBoard(newBoard);
        setCurrGuess({...currGuess, letterpos: currGuess.letterpos - 1});
    }

    const onSelectLetter = (keyVal) =>{
        if(currGuess.letterpos > 4) return;
        const newBoard = [...board];
        newBoard[currGuess.guess][currGuess.letterpos] = keyVal;
        setBoard(newBoard);
        setCurrGuess({...currGuess, letterpos: currGuess.letterpos + 1});
    }

    return(
        <div className='wordle-game' onClick={() => closeAlert()}>
            <h1>Wordle</h1>
            <hr />
            <AppContext.Provider value={{ onSelectLetter, board, setBoard, currGuess, setCurrGuess, onDelete, onEnter, correctWord, letterStatus, setLetterStatus, gameResult, setGameResult, initialBoard }} >
                <div className='game'>
                    <Board />
                </div>
                <div className={"keyboard" + (gameResult.gameOver ? ' keyboardDisabled' : '')}><Keyboard /></div>
                {gameResult.gameOver ? <GameResult onClick={props.startNewGame} /> : '' }
            </AppContext.Provider>
        </div>
    )
}
export default Game;