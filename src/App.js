import Board from './components/Grid/Board';
import Keyboard from './components/Keyboard';
import React , { useState, createContext, useEffect } from "react";
export const AppContext = createContext();

function App(){
    const onSelectLetter = (key) => {
        // letter = key;
    };

    return(
        <div className='wordle-game'>
            <h1>Wordle</h1>
            <hr />
            <AppContext.Provider value={{ onSelectLetter }} >
                <div className='game'>
                    <Board />
                </div>
                <div class="keyboard"><Keyboard /></div>
            </AppContext.Provider>
        </div>
    )
}

export default App;