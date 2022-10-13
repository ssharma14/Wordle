import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { initialBoard } from "./components/Words";
import React , { useState, createContext, useEffect } from "react";
export const AppContext = createContext();

function App(){
    const [board, setBoard] = useState(initialBoard);
    const [currGuess, setCurrGuess] = useState({ guess: 0, letterpos: 0 });
    // const [wordSet, setWordSet] = useState(new Set());
    // const [correctWord, setCorrectWord] = useState("");
    // const [disabledLetters, setDisabledLetters] = useState([]);

    // useEffect(() => {
    //     generateWordSet().then((words) => {
    //         //console.log(words);
    //     //   setWordSet(words.wordSet);
    //     //   setCorrectWord(words.todaysWord);
    //     });
    // }, []);

    const correctWord = "RIGHT";
    
    const onEnter = () =>{
        console.log("ebter");
        if(currGuess.letterpos !== 5) return;
        setCurrGuess({ guess: currGuess.guess + 1, letterpos: 0})
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
            <AppContext.Provider value={{ onSelectLetter, board, setBoard, currGuess, setCurrGuess, onDelete, onEnter, correctWord }} >
                <div className='game'>
                    <Board />
                </div>
                <div className="keyboard"><Keyboard /></div>
            </AppContext.Provider>
        </div>
    )
}

export default App;