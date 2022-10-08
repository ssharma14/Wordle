import Board from './components/Grid/Board';
import React from 'react';
import { createContext } from "react";
export const AppContext = createContext();

function App(){
    return(
        <div className='wordle-game'>
            <h1>Wordle</h1>
            <hr />
            <div className='game'>
                <Board />
            </div>
        </div>
    )
}

export default App;