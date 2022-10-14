import Board from './components/Board';
import Keyboard from './components/Keyboard';
import GameResult from "./components/GameResult";
import { initialBoard, generateWordSet } from "./components/Words";
import React , { useState, createContext, useEffect } from "react";
export const AppContext = createContext();

function App(){
    const [board, setBoard] = useState(initialBoard);
    const [currGuess, setCurrGuess] = useState({ guess: 0, letterpos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [letterStatus, setLetterStatus] = useState([]);
    const [gameResult, setGameResult] = useState({
        gameOver: false,
        guessedWord: false,
    });

    useEffect(()=>{
        generateWordSet()
    }, []) 
    
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
        console.log(correctWord);
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrGuess({ guess: currGuess.guess + 1, letterpos: 0 });
        } else {
            alert("Not in word list");
        }

        if (currWord === correctWord) {
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
        <div className='wordle-game'>
            <h1>Wordle</h1>
            <hr />
            <AppContext.Provider value={{ onSelectLetter, board, setBoard, currGuess, setCurrGuess, onDelete, onEnter, correctWord, letterStatus, setLetterStatus, gameResult, setGameResult }} >
                <div className='game'>
                    <Board />
                </div>
                <div className="keyboard"><Keyboard /></div>
                {gameResult.gameOver ? <GameResult /> : null }
            </AppContext.Provider>
        </div>
    )
}

export default App;