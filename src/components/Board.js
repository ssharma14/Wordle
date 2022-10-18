import React from 'react';
import Cell from './Cell';

const rowLength = [0, 1, 2, 3, 4, 5];
const cellLength = [0, 1, 2, 3, 4];

export const initialBoard = () => [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

function Board () {
    const emptyRows = Array.from(Array(rowLength.length));
    const emptyCells = Array.from(Array(cellLength.length ));
    return (
        <div className='board'>
            {emptyRows.map((_, j) => (
                <div key={j} className='row'>
                    {emptyCells.map((letter, i) => (
                        <Cell key={i} letterpos={i} rowpos={j} letter={letter}/>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Board